import read from 'readline-sync'

export function mainMenu() {

    let option: number;
    let conti = true

    while (conti) {

        console.log("*****************************************************");
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
        console.log("                                                     ");

        console.log("Por favor digite o numero da opção desejada ");
        option = read.questionInt("");

        switch (option) {
            case 1:
                console.log("\n\nCriar Conta\n\n");

                break;
            case 2:
                console.log("\n\nListar todas as Contas\n\n");

                break;
            case 3:
                console.log("\n\nConsultar dados da Conta - por número\n\n");

                break;
            case 4:
                console.log("\n\nAtualizar dados da Conta\n\n");

                break;
            case 5:
                console.log("\n\nApagar uma Conta\n\n");

                break;
            case 6:
                console.log("\n\nSaque\n\n");

                break;
            case 7:
                console.log("\n\nDepósito\n\n");

                break;
            case 8:
                console.log("\n\nTransferência entre Contas\n\n");

                break;
            case 9:
                 console.log("\n                 Agradecemos a preferencia");
                 console.log("\nBanco brazileiro do Brazil com Z - O seu Futuro começa aqui!");
                 sobre()

                 conti=false

                break;
            default:
                console.log("\nOpção Inválida!\n");

                break;
        }
    }

}


export function sobre(): void { /* Função com os dados da pessoa desenvolvedora */
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Leticia Fontes ");
    console.log("Generation Brasil - leticiaf@genstudents.org"); 
    console.log("https://github.com/leticialafontes/conta_bancaria.git");
    console.log("*****************************************************");
}

mainMenu();