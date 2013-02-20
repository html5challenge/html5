sap.ui.jsview("challenge.Overview", {

      getControllerName : function() {
         return "challenge.Overview";
      },

      createContent : function(oController) {
  		var btnBudget = new sap.ui.commons.Button({
			id : this.createId(this.BtnBudget),
			text : "Price",
			textAlign : "Center",
			width : "80px",
			height : "40px"
		});
  		
  		this.addContent(btnBudget);
      }

});
