import { ContaRepository } from './src/repository/ContaRepository';
import read from 'readline-sync'
import { colors } from './src/util/Colors';
import { Conta } from './src/model/Conta';
import { ContaCorrente } from './src/model/ContaCorrente';
import { ContaPoupanca } from './src/model/ContaPoupanca';
import { ContaController } from './src/controller/ContaController';

export function mainMenu() {

    let contas: ContaController = new ContaController();

    let option, numero, agencia, tipo, saldo, limite, aniversario, valor, numeroDestino: number;
    let titular: string;
    const tiposContas = ['Conta Corrente', 'Conta Poupança'];

    //teste Conta
    // const conta: Conta = new Conta(1, 123, 1, "Adriana", 10000); //teste para ver se a classe conta foi feita corretamente
    // conta.visualizar();
    // conta.sacar(10500);
    // conta.visualizar();
    // conta.depositar(5000);
    // conta.visualizar();

    //teste ContaCorrente

    // const contacorrente: ContaCorrente = new ContaCorrente (2, 123, 1, "Mariana", 15000, 1000);
    // contacorrente.visualizar();
    // contacorrente.sacar(2000);
    // contacorrente.visualizar();
    // contacorrente.depositar(1000);
    // contacorrente.visualizar();

    // // teste ContaPoupanca
    // const contapoupanca: ContaPoupanca = new ContaPoupanca(3, 123, 2, "Victor", 1000, 10);
    // contapoupanca.visualizar();
    // contapoupanca.sacar(200);
    // contapoupanca.visualizar();
    // contapoupanca.depositar(1000);
    // contapoupanca.visualizar();

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
                console.log(colors.fg.whitestrong,"\n\nCriar Conta\n\n", colors.reset);

                console.log('\nDigite o numero da agencia: ')
                agencia = read.questionInt('')

                console.log('\nDigite o nome do titular da conta: ')
                titular = read.question('')

                console.log('\nDigite o tipo da conta: ')
                tipo = read.keyInSelect(tiposContas,'', {cancel: false}) +1;

                console.log('\nDigite o saldo da conta (R$): ')
                saldo = read.questionFloat('')

                switch(tipo){
                    case 1: 
                        console.log('\nDigite o limite da conta (R$): ')
                        limite = read.questionFloat('');
                        contas.cadastrar(
                            new  ContaCorrente(contas.gerarNumero(), agencia, tipo, titular, saldo, limite)
                        );
                        break
                    case 2:
                        console.log('\nDigite o dia do aniversario da conta poupança: ');
                        aniversario = read.questionFloat('')
                        contas.cadastrar(
                            new ContaPoupanca(contas.gerarNumero(), agencia, tipo, titular, saldo, aniversario)
                        );
                        break;
                }

                keyPress()

                break;
            case 2:
                console.log(colors.fg.whitestrong,"\n\nListar todas as Contas\n\n", colors.reset);
                contas.listarTodas();

                keyPress()

                break;
            case 3:
                console.log(colors.fg.whitestrong, "\n\nConsultar dados da Conta - por número\n\n");
                console.log('Digite o numero da conta: ')
                numero = read.questionInt('');
                contas. procurarPorNumero(numero);

                keyPress()

                break;
            case 4:
                console.log(colors.fg.whitestrong,"\n\nAtualizar dados da Conta\n\n");
                
                console.log('Digite o numero da Conta: ');
                numero = read.questionInt('')

                let conta = contas.buscarNoArray(numero);

                if (conta !== null){
                    console.log('Digite o numero da agencia: ')
                    agencia = read.questionInt('')

                    console.log('\nDigite o nome do titular da conta: ')
                    titular = read.question('')

                    tipo = conta.tipo;

                    console.log('\nDigite o saldo da conta (R$): ')
                    saldo = read.questionFloat('')

                    switch(tipo){
                        case 1: 
                            console.log('\nDigite o limite da conta (R$): ')
                            limite = read.questionFloat('');
                            contas.atualizar(
                                new  ContaCorrente(numero, agencia, tipo, titular, saldo, limite)
                            );
                            break
                        case 2:
                            console.log('\nDigite o dia do aniversario da conta poupança: ');
                            aniversario = read.questionInt('')
                            contas.atualizar(
                                new ContaPoupanca(numero, agencia, tipo, titular, saldo, aniversario)
                            );
                            break;
                    }
                }else{
                    console.log(colors.fg.red, `\n A conta numero: {numero} não foi encontrada`, colors.reset)
                }

                keyPress()

                break;
            case 5:
                console.log(colors.fg.whitestrong, "\n\nApagar uma Conta\n\n");
                console.log('Digite o numero da conta: ')
                numero = read.questionInt('')
                contas.deletar(numero);

                keyPress()

                break;
            case 6:
                console.log(colors.fg.whitestrong,"\n\nSaque\n\n", colors.reset);

                console.log('\nDigite o numero da Conta: ');
               numero = read.questionInt('')

                console.log('\nDigite o numero da Conta: ');
                valor = read.questionFloat('');

                contas.sacar(numero, valor);

                keyPress()

                break;
            case 7:
                console.log(colors.fg.whitestrong, "\n\nDepósito\n\n", colors.reset);

                console.log('\n Digite o numero da conta: ')
                numero = read.questionInt('')

                console.log('\n Digite o valor do deposito (R$): ')
                valor = read.questionFloat ('');

                contas.depositar(numero, valor);

                keyPress()

                break;
            case 8:
                console.log(colors.fg.whitestrong, "\n\nTransferência entre Contas\n\n", colors.reset);

                console.log('Digite o numero da conta de Origem: ')
                numero = read.questionInt('')

                console.log('Digite o numero da conta de Destino: ')
                numeroDestino = read.questionInt('')

                console.log('\n Digite o valor do deposito (R$): ')
                valor = read.questionFloat ('');

                keyPress()

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