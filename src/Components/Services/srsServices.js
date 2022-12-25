
import Joi from 'joi-browser'; 

 
export const updateTitleSchema = {
    title: Joi.string().min(5).max(50).required().label("Project Title"),
    author: Joi.string().min(1).max(500).required().label("Prepared By"),
    orginzation: Joi.string().min(1).max(26).required().label("Orginzation"),
}