
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.ws.rs.ApplicationPath;
import java.io.IOException;
import java.io.*;

import javax.servlet.http.HttpSession;



public class AreaCheckServlet extends HttpServlet {



    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {



        HttpSession session = request.getSession(true);



        double x;
        double y;
        double r;
        x = Double.parseDouble(request.getParameter("X"));
        y = Double.parseDouble(request.getParameter("Y"));
        r = Double.parseDouble(request.getParameter("R"));

            boolean inArea1 = (x > 0 && y > 0 && false);
            boolean inArea2 = (x <= 0 && y >= 0 && x * x + y * y <= r * r);
            boolean inArea3 = (x < 0 && y < 0 && y > -0.5 - 0.5 * x);
            boolean inArea4 = (x >= 0 && y <= 0 && y > -r && x < r);

            boolean inArea = inArea1 || inArea2 || inArea3 || inArea4;
            Point point = new Point(x, y, r, 0);
            History history = new History();
            String fi, se, po;
            if (session.getAttribute("history") == null) {
                fi = "NEW-fi" + history.toString();
                history.add(point);
                po = "po" + point.toString();
                se = "se" + history.toString();
                session.setAttribute("history", history);
            } else {
                history = (History) session.getAttribute("history");
                fi = "fi" + history.toString();
                po = "po" + point.toString();
                history.add(point);
                se = "se" + history.toString();
                session.setAttribute("history", history);
            }

        String ans=history.toString();


        PrintWriter pwriter = response.getWriter();
        pwriter.println(ans);
        pwriter.close();

    }
    }