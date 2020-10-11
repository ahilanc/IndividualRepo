package stepDefinitions;

import cucumber.TestContext;
import helpers.FileReaderHelper;
import io.cucumber.java8.En;

import java.text.SimpleDateFormat;
import java.util.Date;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.Select;
import pageObjects.FundTransferObjects;

import static helpers.UtilFunctions.*;
import static testSupport.WebDriverUtil.attachScreenshot;

public class FundTransferSteps implements En {
    TestContext testContext;
    FundTransferObjects fundTransferObjects;
	
	public FundTransferSteps(TestContext context) {
        testContext = context;
        fundTransferObjects = testContext.getPageObjectManager().getFundTransferObjects();
		
		And("^User click on Fund Transfer Tab$", () -> {
			attachScreenshot();
			fundTransferObjects.fundTransferTab.click();
		});

		And("^User clicks the FundTransfer button$", ()-> {
		 try {
			attachScreenshot();
			fundTransferObjects.btnFundTransfer.click();
		 } catch (Exception e) {
			 Assert.fail("Not able to perform click due to "+e.getMessage());
		 }
			
		});

		Then("^User inputs the fields (.+) to complete the fund transfer$", (String rowQuery)-> {
			try {
				String ReceiverBankName = FileReaderHelper.getExcelFileHelper().getTestValue("ReceiverBankName", rowQuery);
				String ReceiverName = FileReaderHelper.getExcelFileHelper().getTestValue("ReceiverName", rowQuery);
				String ReceiverAccountNumber = FileReaderHelper.getExcelFileHelper().getTestValue("ReceiverAccountNumber", rowQuery);
				String RoutingNumber = FileReaderHelper.getExcelFileHelper().getTestValue("RoutingNumber", rowQuery);
				String Amount = FileReaderHelper.getExcelFileHelper().getTestValue("Amount", rowQuery);
				String FundTransferOptionVal = FileReaderHelper.getExcelFileHelper().getTestValue("FundTransferOption", rowQuery);
				String Description = FileReaderHelper.getExcelFileHelper().getTestValue("Description", rowQuery);

				fundTransferObjects.txtReceiverBankName.sendKeys(ReceiverBankName);
				fundTransferObjects.txtReceiverName.sendKeys(ReceiverName);
				fundTransferObjects.txtReceiverAccountNo.sendKeys(ReceiverAccountNumber);
				fundTransferObjects.txtSwiftAccountNo.sendKeys(RoutingNumber);
				Select select = new Select(fundTransferObjects.btnTransferType);
				select.selectByVisibleText(FundTransferOptionVal);
				fundTransferObjects.txtAmount.sendKeys(Amount);

				SimpleDateFormat dateFormat = new SimpleDateFormat("dd-MM-yyyy");
				Date date = new Date();
				String currDate = dateFormat.format(date);

				WebDriver driver = getLatestDriver();
				JavascriptExecutor js = (JavascriptExecutor) driver;
				js.executeScript("arguments[0].value='" + currDate + "'", fundTransferObjects.txtDate);
				fundTransferObjects.textAreaDescription.sendKeys(Description);
				attachScreenshot();
			} catch (Exception e) {
				Assert.fail("Input fund transfer fields failed due to '"+e.getMessage()+"'");
			}
			
		});

		Then("^user enter authentication code as (.+) and click validate button$", (String AuthenticationCode)-> {
			Assert.assertTrue(fundTransferObjects.txtAuthCode.isDisplayed());
			fundTransferObjects.txtAuthCode.sendKeys(AuthenticationCode);
			attachScreenshot();
			fundTransferObjects.btnValidate.click();
		});

		Then("^User see success message and reference no will be generated$", ()-> {
			Assert.assertTrue(fundTransferObjects.successTxnMessage.isDisplayed());
			String expectedMsg = "International Transaction Successful";
			String actualMsg = fundTransferObjects.successTxnMessage.getText();
			Assert.assertEquals(expectedMsg, actualMsg);
			
			String checkRefTxnNo = fundTransferObjects.referenceTxnNumber.getText();
			if (!checkRefTxnNo.equals("")) {
				attachScreenshot();
			} else {
				Assert.fail("Transaction Reference number generated is not successful");
			}
			
		});

	}

}
