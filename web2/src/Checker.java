public class Checker {
    public static String checkX(String X){
        if (isNumeric(X)){
            double d = Double.parseDouble(X);
            if (d<=3 && d>=-5) return "valid"; else return "invalid";

        } else return "invalid";

    }

    public static String checkY(String Y){
        if (isNumeric(Y)){
            double d = Double.parseDouble(Y);
            if (d<=3 && d>=-3) return "valid"; else return "invalid";

        } else return "invalid";

    }
    public static String checkR(String R){
        if (isNumeric(R)){
            double d = Double.parseDouble(R);
            if (d<=5 && d>=0) return "valid"; else return "invalid";

        } else return "invalid";

    }

    public static boolean isNumeric(String str)
    {
        try
        {
            double d = Double.parseDouble(str);
        }
        catch(NumberFormatException nfe)
        {
            return false;
        }
        return true;
    }
}
