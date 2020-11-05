#include <iostream>
#include <fstream>
#include <string>
#include <iomanip>


int main(int argc, char** argv){
	FILE *file;
	file = fopen("Teste.txt", "r");
	
	if(file == NULL){
		printf("can't open file");
		getchar();
		exit(0);
		
	}
	char frase[100];
	
	while(fgets(frase, 100, file) != NULL){
		printf("%s", frase);
	}
	fclose(file);
	
	system("pause");
	return 0;
}

/*
int main(int argc, char** argv) {
	
	ifstream txtFile;
	string linha;
	
	txtFile.open("BASE.txt");
	
	while(!txtFile.eof()){
		
		getline(txtFile,linha);
		
		cout << linha <<endl;
	}
	
	txtFile.close();
	
	system("pause");
	return 0;
}*/
/*
#include <stdio.h>
#include <conio.h>

int main()
{
  FILE *arq;
  char Linha[100];
  char *result;
  int i;
  clrscr();
  // Abre um arquivo TEXTO para LEITURA
  arq = fopen("BASE.txt", "rt");
  if (arq == NULL)  // Se houve erro na abertura
  {
     printf("Problemas na abertura do arquivo\n");
     return;
  }
  i = 1;
  while (!feof(arq))
  {
	// Lê uma linha (inclusive com o '\n')
      result = fgets(Linha, 100, arq);  // o 'fgets' lê até 99 caracteres ou até o '\n'
      if (result)  // Se foi possível ler
	  printf("Linha %d : %s",i,Linha);
      i++;
  }
  fclose(arq);
  
  return 0;
}  */

