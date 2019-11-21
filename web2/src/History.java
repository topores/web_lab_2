import java.util.SortedSet;
import java.util.TreeSet;
import java.util.Set;

public class History {
    Set<Point> points = new TreeSet<Point>();

    public History() {
    }

    public void add(Point point) {
        points.add(point);
    }

    public Set<Point> getPoints() {
        return points;
    }

    public void clear() {
        points = new TreeSet<Point>();
    }

    @Override
    public String toString() {
        String S = "[";
        for (Point p : points) {
            S = S + p.toString() + ",\n";
        }
        if (S.length()>4) {
            S = S.substring(0, S.length() - 2);
        } else {
            S = "[";
        }


        S = S + "]";
        return S;
    }
}
