




let stackVar;

export const asyncHandler = (API) => {
    return (req, res, next) => {
        API(req, res, next).catch(err => {
       
              stackVar = err.stack  
            return next(new Error(err.message, { caus: 500 }))
       
        })

    }
}



export const globalErrorHandling = (err, req, res, next) => {
    if (err) {
        if (process.env.MOOD == "DEV") {
            return res.status(err.caus || 500).json({ message:"fail Response" , Error: err.message, stack: stackVar })
        }
        return res.status(err.caus || 500).json({ message: err.message })
    }
}


