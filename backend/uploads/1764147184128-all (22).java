import java.util.*;

class Main {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int x = sc.nextInt();
        int y = sc.nextInt();
        int z = sc.nextInt();

        int max = Math.max(x, Math.max(y, z));
        int min = Math.min(x, Math.min(y, z));
        int mid = x + y + z - max - min;

        if (max - min >= 10) {
            System.out.println("check again");
        } else {
            System.out.println("final " + mid);
        }
    }
}
