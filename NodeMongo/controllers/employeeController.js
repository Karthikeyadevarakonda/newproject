const Employee = require('../model/Employee')

const createEmployee = async (req,res)=>{

    try{
        const {image, pname, originalPrice , discountPrice, rating, reviewCount} =req.body

        const employee = new Employee({
            image,
            pname,
            originalPrice ,
            discountPrice,
            rating,
            reviewCount
        })
        await employee.save()
        res.status(201).json(employee)
    } catch(error){
            console.log("THERE WAS AN ERROR :",error)
            res.status(500).json({message: 'server error'})
    }

}

const getEmployees = async(req,res)=>{
    try{
        const employees = await Employee.find()
        res.status(200).json(employees)
    }
    catch(error){
        console("Error in get employess",error);
        res.status(500).json({message:"server error"})
    }
}

const singleEmployee = async(req,res)=>{
            try{
                const employees = await Employee.findById(req.params.id)

                if(!employees){
                   return res.status(404).json({message:"employeee Not found"})
                }

                res.status(200).json(employees)
            }
            catch(error){
                console("Error in single employess",error);
                res.status(500).json({message:"server error"})
            }
            
}

const updateEmployee = async(req,res)=>{
    try{
        const  {image, pname, originalPrice , discountPrice, rating, reviewCount} = req.body
        
        const myEmployee = await Employee.findByIdAndUpdate(
            req.params.id,
            {image, pname, originalPrice , discountPrice, rating, reviewCount},
            { new: true, runValidators: true }
        )
        if(!myEmployee){
            return res.status(404).json({message:"employeee Not found"})
        }
        res.status(200).json(myEmployee)
    }
    catch(error){
        console.log("Error in update employess",error);
        res.status(500).json({message:"server error"})
    }
}

const deleteEmployee =  async (req,res)=>{
    try{
        const deleteEmployee = await Employee.findByIdAndDelete(req.params.id)
        if (!deleteEmployee) {
            return res.status(404).json({ message: "Employee not found" });
        }
        res.status(200).json({ message: "Employee deleted successfully" });
    }catch(error){
        console.log("Error in delete employess",error);
        res.status(500).json({message:"server error"})
    }
}

module.exports = {createEmployee, getEmployees, singleEmployee, updateEmployee, deleteEmployee}