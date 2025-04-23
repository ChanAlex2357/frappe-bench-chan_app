# Copyright (c) 2025, JACQUES Chan Alex and contributors
# For license information, please see license.txt

import frappe
from frappe import _
from frappe.model.document import Document


class ServerSideScripting(Document):
	@frappe.whitelist()
	def say_hello(self,msg):
		import time
		time.sleep(5)
		frappe.msgprint(_("Hello {0}").format(msg))
		self.mob_no = "1234567890"
		return f"Message : {msg}"
    
	def validate(self):
		self.get_document()

	def get_document(self):
		doc = frappe.get_doc("Family", self.client)
		frappe.msgprint(f"Family age: {doc.age}")

@frappe.whitelist()
def frappe_call(msg):
    return f"Hello {msg} from frappe_call"
