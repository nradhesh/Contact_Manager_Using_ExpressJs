const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");

// Get all contacts
const getContacts = asyncHandler(async (req, res) => {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
});

// Create a new contact
const createContact = asyncHandler(async (req, res, next) => {
    const { name, phone, email } = req.body;
    if (!name || !phone || !email) {
        const error = new Error("All fields are required");
        error.status = 400; // Set the status code to 400 (Bad Request)

    }

    const contact = await Contact.create({
        name,
        phone,
        email
    });
    res.status(201).json(contact);
});

// Get a specific contact by ID
const getContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }
    res.json(contact);
});

// Update a contact
const updateContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    const { name, phone, email } = req.body;
    contact.name = name || contact.name;
    contact.phone = phone || contact.phone;
    contact.email = email || contact.email;

    const updatedContact = await contact.save();
    res.json(updatedContact);
});

// Delete a contact
const deleteContact = asyncHandler(async (req, res) => {
    const contact = await Contact.findById(req.params.id);
    if (!contact) {
        res.status(404);
        throw new Error("Contact not found");
    }

    await contact.remove();
    res.json({ message: "Contact removed" });
});

module.exports = {
    getContacts,
    createContact,
    getContact,
    updateContact,
    deleteContact
};
