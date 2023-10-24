
  import java.util.Arrays;
  import java.util.Random;
public class Main{
  

  public static void main(String[] args){
    int arr[] = {1,2,3,4,5,6,7};
    Random random = new Random();
    
    for (int i = 6; i > 0; i--){

      int rNum = random.nextInt(i + 1);
      int temp = arr[rNum];
      arr[rNum] = arr[i];
      arr[i] = temp;
    }
    System.out.println(Arrays.toString(arr));
  } 
}