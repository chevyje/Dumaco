import express from "express";
import { db_execute } from "../../db.js";
import { db_query } from "../../db.js";
import messages from "../../message.js";

const PalletRouter = express.Router();

// Get all pallets
PalletRouter.get("/", async (req, res) => {
    try{
        const pallets = await db_query("SELECT * FROM pallet");
        return res.status(200).json(pallets);
    }catch(err){
        console.error(err);
        return res.status(500).send(messages.error.server)
    }
})

// Get next id
PalletRouter.get("/nextID", async (req, res) => {
    try{
        const pallet = await db_query("SELECT MAX(CAST(SUBSTRING(palletID, -1, 6) AS int)) AS MaxID FROM pallet");
        let num = pallet[0].MaxID + 1;
        let pad = "000000"
        let value = pad + num.toString();
        let result = value.substring(value.length - 6, value.length);
        let palletID = "pallet-" + result;
        return res.status(200).json({"ID": palletID});
    }catch (err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
})

// Get 1 pallet
PalletRouter.get("/:id", async (req, res) => {
    const id = req.params.id;
    try{
        const pallet = await db_query("SELECT * FROM pallet WHERE palletID = ?", [id]);
        if (pallet.length <= 0){ return res.status(404).send(messages.error.notFound); }
        else { return res.status(200).json(pallet);}
    }catch (err){
        console.error(err);
        return res.status(500).send(messages.error.server);
    }
})

// Create new pallet.
PalletRouter.post('/', async (req, res) => {
    let palletID;

    try{
        const pallet = await db_query("SELECT MAX(CAST(SUBSTRING(palletID, -1, 6) AS int)) AS MaxID FROM pallet");
        let num = pallet[0].MaxID + 1;
        let pad = "000000"
        let value = pad + num.toString();
        let result = value.substring(value.length - 6, value.length);
        palletID = "pallet-" + result;
    }catch (err){
        console.error(err)
        return res.status(500).send(messages.error.server);
    }

    try{
        await db_execute("INSERT INTO pallet (palletID) VALUES (?)", [palletID]);
        return res.status(200).json({...messages.success.addedRow, "palletID": palletID});
    }catch(err){
        console.error(err);
        return res.status(500).json(messages.error.server);
    }
});

// Update productID
PalletRouter.put('/productID' , async (req, res) => {
    let { palletID, productID } = req.body;
    if (!palletID || palletID.length <= 0) return res.status(400).json(messages.invalid("pallet ID"));
    if (!productID || productID.length <= 0) return res.status(400).json(messages.invalid("product ID"));

    try{
        await db_execute("UPDATE pallet SET productID = ? WHERE palletID = ? ", [productID, palletID]);
        return res.status(200).send(messages.success.update);
    }catch (err){
        console.error(err);
        return res.status(500).send(messages.error.server);
    }
})

//Update Zone
PalletRouter.put('/zone', async (req, res) => {
    let { palletID, zone } = req.body;
    if (!palletID || palletID.length <= 0) return res.status(400).json(messages.invalid("pallet ID"));
    if (!zone || zone.length <= 0) return res.status(400).json(messages.invalid("Zone"));

    try{
        let pallets = await db_query("SELECT * FROM pallet WHERE palletID = ?", [palletID]);
        if(pallets.length <= 0) return res.status(404).send(messages.error.notFound("pallet id"));
        await db_execute("UPDATE pallet SET zone = ? WHERE palletID = ? ", [zone, palletID]);
        return res.status(200).send(messages.success.update);
    }catch (err){
        console.error(err);
        return res.status(500).send(messages.error.server);
    }
})

// Delete pallet
PalletRouter.delete('/:id' , async (req, res) => {
    let id = req.params.id;
    try{
        const pallet = await db_query("DELETE FROM pallet WHERE palletID = ?", [id]);
        if(pallet.affectedRows < 1){
            return res.status(404).send(messages.error.notFound);
        }else{
            return res.status(200).send(messages.success.deletedRow);
        }
    }catch (err){
        console.error(err);
        return res.status(500).send(messages.error.server);
    }
})

export default PalletRouter;
