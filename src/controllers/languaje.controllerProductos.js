import { getConnection } from "./../database/database.js";

const getProductos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre, marca, url, descripcion, id  FROM Productos");
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

const getProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("SELECT nombre, marca, url, descripcion FROM Productos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const addProducto = async (req, res) => {
    try {
        const {nombre, marca, url, descripcion } = req.body;

        if (nombre === undefined || marca === undefined || url === undefined || descripcion===undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const dateProductos = { nombre, marca, url, descripcion};
        const connection = await getConnection();
        await connection.query("INSERT INTO Productos SET ?",dateProductos);
        res.json({ message: "Product added" });
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const updateProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre,marca, descripcion, url } = req.body;

        if (id === undefined || nombre === undefined || marca === undefined || url === undefined || descripcion===undefined) {
            res.status(400).json({ message: "Bad Request. Please fill all field." });
        }

        const dateProducto = { nombre, marca, url, descripcion};
        const connection = await getConnection();
        const result = await connection.query("UPDATE Productos SET ? WHERE id = ?", [dateProducto, id]);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};


const deleteProducto = async (req, res) => {
    try {
        const { id } = req.params;
        const connection = await getConnection();
        const result = await connection.query("DELETE FROM Productos WHERE id = ?", id);
        res.json(result);
    } catch (error) {
        res.status(500);
        res.send(error.message);
    }
};

export const methodsProductos = {
    getProductos,
    getProducto,
    addProducto,
    updateProducto,
    deleteProducto
};
