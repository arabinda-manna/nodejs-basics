const models = require("./models");

const setManagerByProjectName = async (projectName, manager_id) => {
    try{
        await models.Project.update({ manager_id: manager_id }, {
            where: {
                name: projectName
            }
        });
        // console.log(await db.Project.findAll());
    }catch(e){
        console.log(e);
    }

    return false;
}

const getEngineersByProjectName = async (projectName) => {
    try{
        // let projectRes = await models.Project.findOne({
        //     where: {
        //         name: projectName
        //     }
        // });

        // let engineersRes = await models.Engineer.findAll({
        //     where: {
        //         project_id: projectRes.dataValues.id
        //     }
        // });

        // engineersRes.forEach(engineer => console.log(engineer.dataValues));

        let projectRes = await models.Project.findAll({
            where: {
                name: projectName
            },
            include: [models.Engineer]
        });
        projectRes.forEach(project => {
            // console.log(project);       
            project.Engineers.forEach(engineer => console.log(engineer.dataValues))
        });
        
    }catch(e){
        console.log(e);
    }

    return false;
}

const deleteProjectById = async (projectId) => {
    try {
        let res = await models.Project.destroy({
            where:{
                id: projectId
            }
        });
        console.log(res);
    } catch (e) {
        console.log(e); 
    }
    return false;
}
// Updating Manager's id in Project table
// setManagerByProjectName("Billing Project", 1);
// setManagerByProjectName("Keyless Project", 2);

//Fetching all Engineers under one project name
getEngineersByProjectName("Billing Project");
 
//Deleting project by Id
// deleteProjectById(2);