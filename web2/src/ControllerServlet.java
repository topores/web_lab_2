
import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.*;
import javax.servlet.http.HttpSession;


public class ControllerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        HttpSession session = request.getSession();

        String message = "";

        String sessionId = session.getId();




        System.out.println("ye");

        System.out.println(request.getParameter("Val"));
        if (request.getParameter("Val") != null) {
            String var = (request.getParameter("var"));
            String ans = "invalid";
            String Val = request.getParameter("Val");
            //throw new IOException(var+" "+Val);
            if ("X".equals(var)) {
                ans = Checker.checkX(Val);
            } else if ("Y".equals(var)) {
                ans = Checker.checkY(Val);
            } else if ("R".equals(var)) {
                ans = Checker.checkR(Val);
            }

            response.setContentType("text/html");
            PrintWriter pwriter = response.getWriter();
            pwriter.println(ans);
            pwriter.close();

        } else if (request.getParameter("X")!=null && request.getParameter("Y")!=null && request.getParameter("R")!=null){
            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/checkArea");
            requestDispatcher.forward(request, response);

    }
        else if(request.getParameter("Val")==null || request.getParameter("X")==null || request.getParameter("Y")==null || request.getParameter("R")==null){
                RequestDispatcher requestDispatcher = request.getRequestDispatcher("/index.jsp");
                requestDispatcher.forward(request, response);
            /**/
            }


    }
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        System.out.println("ye");
        PrintWriter pwriter = response.getWriter();
        //pwriter.println(request.getParameter("getHistory"));
        if (request.getParameter("clear")!=null){
            if (request.getParameter("clear").equals("true")){
                HttpSession session = request.getSession();
                History history =new History();
                session.setAttribute("history", history);
                pwriter.println(history.toString());
                pwriter.close();

            }
        }

        if (request.getParameter("getHistory")!=null){
            HttpSession session = request.getSession();
            History history = (History) session.getAttribute("history");
            String ans;
            if (history==null) ans="{}";
            else ans=history.toString();
            pwriter.println(ans);
            pwriter.close();
        }

        if (request.getParameter("X")!=null && request.getParameter("Y")!=null && request.getParameter("R")!=null){

            RequestDispatcher requestDispatcher = request.getRequestDispatcher("/checkArea");
            requestDispatcher.forward(request, response);
            pwriter.close();
        }
        throw new IOException(request.getPathInfo());
    }
}
