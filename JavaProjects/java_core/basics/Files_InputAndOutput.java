import java.io.*;

public class Files_InputAndOutput {

    public static void main(String args[]) {
        try {

            // WRITE TO A FILE
            BufferedWriter writer = new BufferedWriter(new FileWriter("basics/OUTPUT.txt"));
            writer.write("Try God and see his greatest made manifest in your life!");
            writer.write("\nHe is Magestic!\n");

            System.out.println("text successfully written...");

            String[] names = { "elijah", "moses", "david", "kb", "emma" };
            int num = 1;

            for (String name : names) {
                writer.write("\n" + num + ". " + name);
                num++;
            }
            writer.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

        // READ FROM A FILE
        try {
            BufferedReader Reader = new BufferedReader(new FileReader("basics/OUTPUT.txt"));

            System.out.println("....Read From File....");
            System.out.println(Reader.readLine()); // only reads the first line of the file

            String line;
            while ((line = Reader.readLine()) != null) {
                System.out.println(line);
            }

            Reader.close();

        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}