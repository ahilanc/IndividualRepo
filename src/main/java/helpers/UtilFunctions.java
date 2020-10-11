package helpers;

import org.openqa.selenium.WebDriver;

public class UtilFunctions {
	
	public static WebDriver gDriver;
	
    public static void openUrl(String URL) {
        WebDriver webDriver = poBaseClass.poGetDriver();
        gDriver = webDriver;
        System.out.println("Opening URL: "+URL);
        webDriver.get(URL);
    }
    
    public static WebDriver getLatestDriver() {
        WebDriver driver = poBaseClass.poGetDriver();
        poBaseClass.poSetDriver(driver);
        return driver;
    }

}
