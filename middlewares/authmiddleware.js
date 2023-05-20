const jwt = require('jsonwebtoken')

const authMiddleware = (req, res, next) => {
  console.log("Auth Middleware Executed")

  
  console.log(req.headers.cookie)
  console.log(req.cookies.jwt)

  const token = req.cookies.jwt
  if (token) {
    
    try {
      const userPayload = jwt.verify(token, process.env.JWT_SECRET_KEY)
      console.log(userPayload)

    
      req.userPayload = userPayload

      next()
    } catch (error) {
      res.status(401).send({ status: 'error', msg: 'Invalid Token' })
    }

  } else {
    res.status(401).send({ status: 'error', msg: 'Token Not Present, Try Login!' })
  }
}


const isAdminMiddleware = (req, res, next) => {
  
  const { isAdmin } = req.userPayload 

  if (isAdmin) {
    next()
  } else {
    res.status(401).send({ status: 'error', msg: 'This operation is not allowed' })
  }
}

module.exports = {
  authMiddleware,
  isAdminMiddleware
}