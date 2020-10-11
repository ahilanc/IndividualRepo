package helpers;

import java.io.BufferedReader;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.io.IOException;
import java.util.Properties;

public class ConfigFileHelper {

    private Properties properties;
    private final String propertyFilePath= "configs//Configuration.properties";

    public ConfigFileHelper () {
        BufferedReader reader;
        try {
            reader = new BufferedReader(new FileReader(propertyFilePath));
            properties = new Properties();
            try {
                properties.load(reader);
                reader.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        } catch (FileNotFoundException e) {
            e.printStackTrace();
            throw new RuntimeException("Configuration.properties not found at " + propertyFilePath);
        }
    }

    public String getDriverPath(){
        System.out.println("user.dir:"+System.getProperty("user.dir"));
        String currentDir = System.getProperty("user.dir");
        String driverPath = currentDir + properties.getProperty("driverPath");
        return driverPath;
        
    }

    public String getApplicationUrl() {
        String url = properties.getProperty("url");
        if(url != null) {
        	return url;
        } else {
        	throw new RuntimeException("url not specified in the Configuration.properties file.");
        }
    }

    public String getAccountNum() {
        String accountNum = properties.getProperty("accountNumber");
        if(accountNum != null) {
        	return accountNum;
        } else {
        	throw new RuntimeException("Account Number not specified in the Configuration.properties file.");
        }
    }
    
    public String getPassword() {
        String password = properties.getProperty("password");
        if(password != null) {
        	return password;
        } else {
        	throw new RuntimeException("Password not specified in the Configuration.properties file.");
        }
    }
    
    public String getInvalidPassword() {
        String invalidPassword = properties.getProperty("invalidPassword");
        if(invalidPassword != null) {
        	return invalidPassword;
        } else {
        	throw new RuntimeException("Invalid Password not specified in the Configuration.properties file.");
        }
    }
    
    public String getPIN() {
        String PINNo = properties.getProperty("PIN");
        if(PINNo != null) {
        	return PINNo;
        } else {
        	throw new RuntimeException("PIN not specified in the Configuration.properties file.");
        }
    }

    public String getDomainDataPath(){
        System.out.println("user.dir:"+System.getProperty("user.dir"));
        String currentDir = System.getProperty("user.dir");
        String domainDataPath = currentDir + properties.getProperty("domainDataPath");
        return domainDataPath;

    }

}
