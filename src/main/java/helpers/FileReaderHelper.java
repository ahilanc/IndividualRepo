package helpers;

public class FileReaderHelper {
	
    private static FileReaderHelper fileReaderHelper = new FileReaderHelper();
    private static ConfigFileHelper configFileHelper = new ConfigFileHelper();
    private static ExcelFileHelper excelFileHelper = new ExcelFileHelper();

    private FileReaderHelper() {

    }

    public static FileReaderHelper getInstance() {
        return fileReaderHelper;
    }

    public ConfigFileHelper getConfigFileHelper() {
        return (configFileHelper == null) ? new ConfigFileHelper() : configFileHelper;
    }
    
    public static ExcelFileHelper getExcelFileHelper() {
    	return (excelFileHelper == null) ? new ExcelFileHelper() : excelFileHelper;
    }

}
