// Copyright (c) 2025, JACQUES Chan Alex and contributors
// For license information, please see license.txt

frappe.ui.form.on("Server Side Scripting", {
	enable: function(frm) {
        frm.call({
            doc: frm.doc,
            method: "say_hello",
            args: {
                msg: "Hello JCA",
            },
            freeze: true,
            freeze_message: "Processing...",
        })
        .then((r) => {
            console.log(r);
        })
    },
});
