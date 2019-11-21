import java.io.Serializable;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.Iterator;

public class Point implements Serializable, Comparable<Point> {
    private double X;
    private double Y;
    private double R;
    private boolean inArea;
    private Date time;

    public Point(double X, double Y, double R, int delta) {
        time = new Date();

        time = new Date(time.getTime());
        this.X = X;
        this.Y = Y;
        this.R = R;

        boolean inArea1 = (X > 0 && Y > 0 && false);
        boolean inArea2 = (X <= 0 && Y >= 0 && X * X + Y * Y <= R * R);
        boolean inArea3 = (X < 0 && Y < 0 && Y > (-0.5*R - 0.5 * X));
        boolean inArea4 = (X >= 0 && Y <= 0 && Y > -R && X < R);

        inArea = inArea1 || inArea2 || inArea3 || inArea4;
    }

    public double getX() {
        return X;
    }

    public void setX(double x) {
        X = x;
    }

    public double getY() {
        return Y;
    }

    public void setY(double y) {
        Y = y;
    }

    public double getR() {
        return R;
    }

    public void setR(double r) {
        R = r;
    }

    public Date getTime() {
        return time;
    }

    @Override
    public String toString() {
        return "{\"X\": " + X + ", \"Y\": " + Y + ", \"R\": " + R + ", \"inArea\": \"" + inArea + "\", \"time\": \"" + time + "\"}";
    }

    @Override
    public int compareTo(Point o) {
        if (o.getTime().getTime()>this.time.getTime())
            return -1;
        else if (o.getTime().getTime()<this.time.getTime())
            return 1;
        else
            return 0;
    }

}