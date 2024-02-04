const Task = require('../models/Task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find()
        res.send(tasks)
    } catch (error) {
        res.status(500).send(error)
    }

}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body)
        res.status(201).json({ task })
    } catch (error) {
        res.status(500).send(error)
    }

}

const getTask = async (req, res) => {
    try {
        const id = req.params.id
        const task = await Task.findOne({ _id: id })
        if (task === null) {
            res.status(201).json({ msg: "Data doesn't exist " })
        }
        else {
            res.status(201).json(task)
        }
    } catch (error) {
        if (error === null)
            res.statu(500).json(error)
    }

}

const updateTask = async (req, res) => {
    try {
        const id = req.params.id
        const newName = req.body.name
        const filter = { _id: id }
        const update = {
            name: newName,
            completed: req.body.completed
        }

        const validation = Task.validate(update)
        if (validation.error) {
            res.staus(500).json(validationResult.error.message)
        }
        else {
            const updateTask = await Task.findOneAndUpdate(filter, update, { new: true, runValidators: true })
            res.status(201).json(update)
        }
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const deleteTask = async (req, res) => {
    try {
        const filter = { _id: req.params.id }
        const Deleted = await Task.findOneAndDelete(filter)

        res.status(201).json(Deleted)
    } catch (error) {
        res.status(500).json({ msg: error })
    }

}


module.exports = {
    getAllTasks, deleteTask, updateTask, getTask, createTask
}