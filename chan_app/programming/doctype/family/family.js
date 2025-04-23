// Copyright (c) 2025, JACQUES Chan Alex and contributors
// For license information, please see license.txt

frappe.ui.form.on("Family", {
    	refresh(frm) {
            frappe.call({
                method:"chan_app.programming.doctype.server_side_scripting.server_side_scripting.frappe_call",
                args : {
                    msg: "Hello Family",
                },
                freeze: true,
                freeze_message: "Processing...",
                callback: function(r) {
                    console.log(r);
                }
            })
            // frappe.msgprint("Hello JCA");
            // frappe.throw("This is a test message");
    	},

///////////////////////////////////////////////
/////////////// VALUE FETCHING ////////////////
///////////////////////////////////////////////
        after_save : function(frm) {
            for ( let member of frm.doc.members) {
                frappe.msgprint(__(" - '{0}' - [{1}]", [member.first_name + " " + member.last_name , member.relation]));
            }
        },
        
        /**
         * Load event for the Family doctype
         * @param {*} frm 
         */
        // onload(frm) {
        //     // frappe.msgprint("Hello JCA ON LOAD");
        // },
        /**
         * Validate event for  the Family doctype form
         * This event is triggered when the form is validated
         * @param {*} frm 
         */
        // validate(frm) {
        //     frappe.msgprint("Hello JCA VALIDATE");
        // },
        /**
         * Save event for the Family doctype form
         * This event is triggered when the form is saved
         * @param {*} frm 
         */
        // save(frm) {
        //     frappe.msgprint("Hello JCA SAVE");
        // },
        /**
         * Before save event for the Family doctype form
         * This event is triggered before the form is saved
         * @param {*} frm 
         */
        // before_save(frm) {
        //     frappe.msgprint("Hello JCA BEFORE SAVE");
        // }
        /**
         * After save event for the Family doctype form
         * This event is triggered after the form is saved
         * @param {*} frm 
         */
        // after_save(frm) {
        //     frappe.msgprint("Hello JCA AFTER SAVE");
        // },
        // enable: function(frm) {
        //     frappe.msgprint("Hello JCA ENABLE");
        // },

        // email : function(frm) {
        //     frappe.msgprint("Hello JCA EMAIL");
        // },
});

/**
 * Child table event for Family Members
 */
frappe.ui.form.on("Family Members", {
    // last_name1: function(frm) {
    //     frappe.msgprint("Hello JCA LAST NAME 1");
    // },
});
