// Configuration Section Price:

var configuration_prices = new Array();
configuration_prices["manual"]=17790;
configuration_prices["automatic"]=18590;
configuration_prices["sManual"]=22455;
configuration_prices["sSportshift"]=23155;

function getConfigurationPrice() {
	var configurationPrice=0;
	var theForm = document.forms["carForm"];
	var workingConfiguration = theForm.elements["selectedConfiguration"];
	for(var i = 0; i < workingConfiguration.length; i++) {
		if(workingConfiguration[i].checked) {
			configurationPrice = configuration_prices[workingConfiguration[i].value];
			break;
		}
	}
	return configurationPrice;
}

// Combo Selection Price:

var combo_prices = new Array();
combo_prices["comboOne"]=1235;
combo_prices["comboTwo"]=3354;
combo_prices["noCombo"]=0;

function getComboPrice() {
	var comboPrice=0;
	var theForm = document.forms["carForm"];
	var workingCombo = theForm.elements["selectedCombo"];
	for(var i = 0; i < workingCombo.length; i++) {
		if(workingCombo[i].checked) {
			comboPrice = combo_prices[workingCombo[i].value];
			break;
		}
	}
	return comboPrice;
}

	// Dealer Options Price:

	function getOptionsPrice() {

		var optionPrice=0;
		var theForm = document.forms["carForm"];
		var upgradedStereoVar = theForm.elements["upgradedStereo"];
		var vipSecurityVar = theForm.elements["vipSecurity"];
		var autoDimmerVar = theForm.elements["autoDimmer"];

		if(upgradedStereoVar.checked==true) {
			optionPrice= optionPrice + 550;
		}
		if(vipSecurityVar.checked==true) {
			optionPrice= optionPrice + 399;
		}
		if(autoDimmerVar.checked==true) {
			optionPrice= optionPrice + 550;
		}
		return optionPrice;
	}

// Calculate Total:

function getTotal() {

	var carPrice = getConfigurationPrice() + getComboPrice() + getOptionsPrice();

	document.getElementById("totalPrice").value = "$"+carPrice;

}