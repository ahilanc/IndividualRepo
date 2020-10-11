package helpers;

import java.util.ArrayList;
import java.util.Iterator;

import com.codoid.products.exception.FilloException;
import com.codoid.products.fillo.Connection;
import com.codoid.products.fillo.Fillo;
import com.codoid.products.fillo.Recordset;

public class ExcelFileHelper {
	public static String excelFilePath = FileReaderHelper.getInstance().getConfigFileHelper().getDomainDataPath();
	
    public String getTestValue(String fieldName, String qry) throws FilloException {
        return xlTesting(fieldName,qry);
    } 
    
    public static String xlTesting(String fieldName, String qry) throws FilloException {
        String testVal = null;
        Fillo fillo = new Fillo();
        
        System.out.println(excelFilePath);
        Connection connection = fillo.getConnection(excelFilePath);
        String fundTransferQuery = "Select * from FundTransfer";
        Recordset recordset = connection.executeQuery(fundTransferQuery);

        while(recordset.next()){
            ArrayList<String> dataColl=recordset.getFieldNames();
            Iterator<String> dataIterator = dataColl.iterator();

            while(dataIterator.hasNext()){
                String currentQuery = recordset.getField("RecordNumber");
                for (int i=0;i<=dataColl.size()-1;i++){
                    String data = dataIterator.next();
                    String dataVal = recordset.getField(data);
                    System.out.println(dataVal);
                    if (currentQuery.equalsIgnoreCase(qry) && data.equalsIgnoreCase(fieldName)){
                        String testData = dataColl.get(i);
                        testVal=recordset.getField(testData);
                    }
                }

                break;
            }
        }

        recordset.close();
        connection.close();
        return testVal;
    }


}
