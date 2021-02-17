import java.util.Arrays;

public class SingleFileJavaApplication {

    public SingleFileJavaApplication(){
        System.out.println("c'tor");
    }

    static {
        System.out.println("-- Application Demo runs in Docker environment --");
    }
    
    public static void main(String[] args) {
        System.out.println("public static main (...)");


        Arrays.stream(args).forEach(x -> System.out.println(x));

        System.out.println("This is java := " + System.getProperty("java.version"));
        System.out.println("Given target := " + System.getProperty("target"));

    }
    
}
