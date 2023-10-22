import { getConnection } from "./../database/database";

const getClientes = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT usuario, contraseña, correo, id FROM Cliente");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT usuario, contraseña, correo FROM Cliente WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const addCliente = async (req, res) => {
    try {
        const { usuario, contraseña, correo } = req.body;

        if (usuario === undefined || contraseña === undefined || correo === undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const dateCliente = { usuario, contraseña, correo };
        const connection = await getConnection();
        await connection.query("INSERT INTO Cliente SET ?",dateCliente);
        res.json({ message: "Cliente added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const updateCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const { usuario, contraseña, correo } = req.body;

        if (id === undefined || usuario === undefined || contraseña === undefined || correo ===undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const dateCliente = { usuario, contraseña, correo };
        const connection = await getConnection();
        const result = await connection.query("UPDATE Cliente SET ? WHERE id = ?", [dateCliente, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const deleteCliente = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Cliente WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methods = {
    getClientes,
    getCliente,
    addCliente,
    updateCliente,
    deleteCliente
};
