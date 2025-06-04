import read from 'readline-sync'
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';

export function mainMenu() {

    let option: number;

    //teste Conta
    // const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000); //teste para ver se a classe conta foi feita corretamente
    // conta.visualizar();
    // conta.sacar(10500);
    // conta.visualizar();
    // conta.depositar(5000);
    // conta.visualizar();

    //teste ContaCorrente

    const contacorrente: ContaCorrente = new ContaCorrente (2, 123, 1, "Mariana", 15000, 1000);
    contacorrente.visualizar();
    contacorrente.sacar(2000);
    contacorrente.visualizar();
    contacorrente.depositar(1000);
    contacorrente.visualizar();

    // teste ContaPoupanca
    const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    contapoupanca.visualizar();
    contapoupanca.sacar(200);
    contapoupanca.visualizar();
    contapoupanca.depositar(1000);
    contapoupanca.visualizar();

    while (true) {

        console.log(colors.bg.black, colors.fg.gray +
            "*****************************************************");
        console.log("                                                     ");
        console.log("           BANCO BRAZILEIRO DO BRAZIL COM Z          ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ");
        console.log("            1 - Criar Conta                          ");
        console.log("            2 - Listar todas as Contas               ");
        console.log("            3 - Buscar Conta por Numero              ");
        console.log("            4 - Atualizar Dados da Conta             ");
        console.log("            5 - Apagar Conta                         ");
        console.log("            6 - Sacar                                ");
        console.log("            7 - Depositar                            ");
        console.log("            8 - Transferir valores entre Contas      ");
        console.log("            9 - Sair                                 ");
        console.log("                                                     ");
        console.log("*****************************************************");
        console.log("                                                     ", colors.reset);

        console.log("Por favor digite o numero da opção desejada ");
        option = read.questionInt("");

         if (option == 9) {
            console.log(colors.fg.greenstrong,
                "\n            Agradecemos a preferencia            ");
            console.log("\nBanco do Brazil com Z - O seu Futuro começa aqui!");
            sobre();
            process.exit(0);
        }

        switch (option) {
            case 1:
                console.log(colors.fg.whitestrong,"\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n");

                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n");

                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n");

                break;
            default:
                console.log(colors.fg.whitestrong,"\nOpção Inválida!\n");

                break;
        }
    }

}


export function sobre(): void { /* Dados da pessoa desenvolvedora */
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Leticia Fontes ");
    console.log("Generation Brasil - leticia.abib95@gmail.com"); 
    console.log("https://github.com/leticialafontes/conta_bancaria.git");
    console.log("*****************************************************");
}

function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    read.prompt();
}

mainMenu();