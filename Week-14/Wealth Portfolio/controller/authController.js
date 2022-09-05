const User = require("./../model/userModal");
const {promisify}  = require('utils')
const jwt = require("jsonwebtoken");

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, {
        expiresIn: process.env.EXPIRES_IN,
    });
};

exports.signup = async (req, res, next) => {
    const newUser = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
    });

    const token = createToken(newUser._id);

    res.status(201).json({
        status: "sucsess",
        token,
        data: {
            user: newUser,
        },
    });
};

exports.login = async (req, res, next) => {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({
            status: fail,
            message: "provide email and password",
        });
    }

    const user = await User.findOne({ email }).select("+password");
    if(!user || !(await user.correctPassword(password, user.password))){
        res.status(400).json(
            {
                status: fail,
                message: 'user does not exist or incorrect password'
            }
        )
    }
    const token = createToken(user._id);

    res.status(200).json({
        status: success,
        token,
    });
};

exports.userAuth = async (req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token = req.headers.authorization.split(' ')[1];

    }
    const decoded = await promisify(jwt.verify)(token,process.env.JWT_SECRET)
    const currentUser = await User.findById(decoded.id)

    if(!currentUser){
        res.status(400).json({
            status: fail,
            message: 'user with this token does not exist'
        })
    }

    req.user = currentUser
    next()
}