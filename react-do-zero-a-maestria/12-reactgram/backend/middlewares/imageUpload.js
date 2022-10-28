const multer = require("multer");
const path = require("path");

// Destination to store 
const imageStorage = multer.diskStorage({
    destination: function(req, file, cb) {
        let folder = ""
        
        if(req.baseUrl.includes("users")) {
            folder = "users"
        } else if (req.baseUrl.includes("photos")) {
            folder = "photos"
        }

        cb(null, `uploads/${folder}`)
    },
    filename: function(req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname)) //uma melhor forma de escalar isso seria usar um uuid
    }
})

const imageUpload = multer({
    storage: imageStorage,
    fileFilter(req, file, cb) {
        if(!file.originalname.match(/\.(png|jpg)$/)) {
            //upload only png and jpg formats
            return cb(new Error("Apenas png ou jpg são aceitos."))
        }
        cb(undefined, true)
    }
})

module.exports = { imageUpload }