import { getConnection } from "./../database/database.js";

const getCliente = async (req, res) => {
    try {
        const id = 1; 
        const connection = await getConnection();
        const result = await connection.query("SELECT usuario, contraseña, id FROM Cliente WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



const updateCliente = async (req, res) => {
    try {
        const{id} = req.params;
        const {contraseña } = req.body;

        if ( id ===undefined || contraseña === undefined) {
            return res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const dateCliente = { contraseña };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Cliente SET ? WHERE id = ?", [dateCliente, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};



export const methods = {

    getCliente,
    updateCliente,
};
