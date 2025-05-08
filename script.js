// Simulando um banco de dados de moradores
const bancoDeDadosMoradores = [

    //BLOCO A

    //101A
            { nome: "ARMINDA BENTO", apartamento: "101-A", whatsapp: "5561991927457" },
            { nome: "JOYCE BENTO", apartamento: "101-A", whatsapp: "5561991927457" },
    //102A
           { nome: "ANDRE BRITO", apartamento: "102-A", whatsapp: "5561993331144" },
           { nome: "REBECA BRITO", apartamento: "102-A", whatsapp: "5561993331144" },
    //103A
          { nome: "AISLAN RODRIQUES", apartamento: "103-A", whatsapp: "5561991574868" },
          { nome: "LETICIA FERNANDES",apartamento: "103-A", whatsapp: "5561991574868" },
          { nome: "RENAN DA SILVA", apartamento: "103-A", whatsapp: "5561991574868" },
          { nome: "LUZIA FLORENCIA", apartamento: "103-A", whatsapp: "5561991574868" },
    //104A
         { nome: "EZEQUIAS PEREIRA", apartamento: "104-A", whatsapp: "5561991986187" },
         { nome: "GENESI PEREIRA", apartamento: "104-A", whatsapp: "5561991986187" },
    //201-A 
         { nome: "CARLA SIMONI", apartamento: "201-A", whatsapp: "5561993235854"},
         { nome: "MARIA DO ROSARIO", apartamento: "201-A", whatsapp: "5561993235854" },
         { nome: "CECILIA NUNES", apartamento: "201-A", whatsapp: "5561993235854" },
    //202-A
        { nome: "ELISANGELA DO SANTOS", apartamento: "202-A", whatsapp: "5561983584688"},
        { nome: "FELIPE GOMES", apartamento: "202-A", whatsapp: "5561983584688"},
        { nome: "GABRIEL GOMES", apartamento: "202-A", whatsapp: "5561983584688"},
    //203-A
        { nome: "CRISTINE CAMPOS", apartamento: "203-A", whatsapp: "5561962602428"}, 
        //204-A
        { nome: "KITIANE POLICARPO", apartamento: "204-A", whatsapp: "5561992527768"}, 
        { nome: "MARCIO MENDES", apartamento: "204-A", whatsapp: "5561992527768"},
        { nome: "PEDRO YTALLO", apartamento: "204-A", whatsapp: "5561992527768"}, 
        { nome: "SHOPIA POLICARPO", apartamento: "204-A", whatsapp: "5561992527768"},
        { nome: "MARIA BERNACI", apartamento: "204-A", whatsapp: "5561992527768"},
        //301-A
        { nome: "GERALDO BORGES", apartamento: "301-A", whatsapp: "5561999643716"},
        { nome: "ANA LUIZA", apartamento: "301-A", whatsapp: "5561999643716"},
        { nome: "MARIA CLARET", apartamento: "301-A", whatsapp: "5561999643716"},
        //302-A
        { nome: "DANIEL MARTINS", apartamento: "302-A", whatsapp: "5561986581774"},
        { nome: "DRYELLE VITORIA", apartamento: "302-A", whatsapp: "5561986581774"},
        { nome: "GIOVANNA MARTINS", apartamento: "302-A", whatsapp: "5561986581774"},
        //303-A
        { nome: "HILDA GOMES", apartamento: "303-A", whatsapp: "5561991774429"}, 
        { nome: "JANAINA FERREIRA", apartamento: "303-A", whatsapp: "5561991774429"},
        { nome: "GABRIEL MAGALHAES", apartamento: "303-A", whatsapp: "5561991774429"}, 
        { nome: "JAQUELINE FERREIRA", apartamento: "303-A", whatsapp: "5561991774429"},
        { nome: "WILLIAM DE MELO", apartamento: "303-A", whatsapp: "5561991774429"},
        //304-A
        { nome: "CLAUDIO MACHADO", apartamento: "304-A", whatsapp: "5561981101044"}, 
        { nome: "ROSALBA FERNANDES", apartamento: "304-A", whatsapp: "5561981101044"},   
        //401-A
        { nome: "SEBASTIAO FERREIRA", apartamento: "401-A", whatsapp: "5561996054278"}, 
        //402-A
        { nome: "GIOVANI RIBEIRO", apartamento: "402-A", whatsapp: "5561985175413"}, 
        { nome: "EDINALVA DE OLIVEIRA", apartamento: "402-A", whatsapp: "5561985175413"},
        { nome: "GERVANNA OLIVEIRA", apartamento: "402-A", whatsapp: "5561985175413"}, 
        { nome: "GISELLY OLIVEIRA", apartamento: "402-A", whatsapp: "5561985175413"},
        { nome: "GIOVANY RIBEIRO", apartamento: "402-A", whatsapp: "5561985175413"}, 
        //403-A
        { nome: "ANTONIA VERAS", apartamento: "403-A", whatsapp: "5561994264291"},         
        //404-A
        { nome: "WELLITON DOS SANTOS", apartamento: "404-A", whatsapp: "5561981453749"}, 
        { nome: "VALENTINA DOS SANTOS", apartamento: "404-A", whatsapp: "5561981453749"},
        { nome: "GILVANETE DOS ANJOS", apartamento: "404-A", whatsapp: "5561981453749"},  
        //501-A     
        { nome: "MARINALVA BARBOSA", apartamento: "501-A", whatsapp: "556199527420"}, 
        { nome: "FLAVIA BARBOSA", apartamento: "501-A", whatsapp: "5561999527420"},
        { nome: "KLAUS WEIPERT", apartamento: "501-A", whatsapp: "5561999527420"}, 
        { nome: "MERLANIO BARBOSA ", apartamento: "501-A", whatsapp: "5561999527420"},
        { nome: "IZAURA DREHER", apartamento: "501-A", whatsapp: "5561999527420"}, 
        //502-a
        { nome: "JOSIEL PASSOS", apartamento: "502-A", whatsapp: "5561998442787"}, 
        { nome: "EVA RIBEIRO", apartamento: "502-A", whatsapp: "5561998442787"},
        { nome: "JUDITE RIBEIRO", apartamento: "502-A", whatsapp: "5561998442787"}, 
        { nome: "GERALDINA RIBEIRO ", apartamento: "502-A", whatsapp: "5561998442787"},   
        //503-A
        { nome: "JAMILSON ALVES", apartamento: "503-A", whatsapp: "5561981971062"}, 
        { nome: "ELENILDA MARIA", apartamento: "503-A", whatsapp: "5561981971062"},
        //504-A
        { nome: "RIVIANE DA SILVA", apartamento: "504-A", whatsapp: "5561982977215"},  
        //601-A
        { nome: "WILSON LUIZ", apartamento: "601-A", whatsapp: "5561992245383"}, 
        { nome: "SAMANTHA DA ROCHA", apartamento: "601-A", whatsapp: "5561992245383"},
        { nome: "YASMIN SOUZA", apartamento: "601-A", whatsapp: "5561992245383"}, 
        { nome: "MARIA LUIZA", apartamento: "601-A", whatsapp: "5561992245383"},
        { nome: "LUCAS DA ROCHA", apartamento: "601-A", whatsapp: "5561992245383"}, 
        //602-A
        { nome: "JOSE RAIMUNDO", apartamento: "602-A", whatsapp: "5561984811525"}, 
        { nome: "JUSSARA ALMEIDA", apartamento: "602-A", whatsapp: "556185895303"},
        { nome: "EDSON ALMEIDA", apartamento: "602-A", whatsapp: "556185889917"}, 
        //603-A
        { nome: "DANIEL PIRES", apartamento: "603-A", whatsapp: "5561998485828"}, 
        { nome: "CONSUELO GITIRANA", apartamento: "603-A", whatsapp: "5561998485828"},
        { nome: "CLARISSE GITIRANA", apartamento: "603-A", whatsapp: "5561998485828"},      
        //604-A
        { nome: "REGINALDO MANOEL", apartamento: "604-A", whatsapp: "5561984941872"}, 
        { nome: "MIRIAM GODOI", apartamento: "604-A", whatsapp: "5561984941872"},
        //701-A
        { nome: "LUCAS DILAN", apartamento: "701-A", whatsapp: "5561999628792"}, 
        { nome: "GABRIEL SANTOS", apartamento: "701-A", whatsapp: "5561999628792"},
        { nome: "DAHYANNE ALEHANDRA", apartamento: "701-A", whatsapp: "5561999628792"},      
        //702-A
        { nome: "DHANNY MORAIS ", apartamento: "702-A", whatsapp: "5561992245414"}, 
        { nome: "LETICIA BEATRIZ", apartamento: "702-A", whatsapp: "5561992245414"},
        //703-A
        { nome: "THIAGO", apartamento: "703-A", whatsapp: "5561984052444"}, 
        //704-A
        { nome: "TANIA LIMA", apartamento: "704-A", whatsapp: "5561981793668"},
        //801-A
        { nome: "JOSE IVAN", apartamento: "801-A", whatsapp: "5561984761366"}, 
        { nome: "ELIANE DO CARMO", apartamento: "801-A", whatsapp: "5561984761366"},
        { nome: "REBECA DE MOURA", apartamento: "801-A", whatsapp: "55619984761366"}, 
        //802-A
        { nome: "DIEGO MENDONÇA", apartamento: "802-A", whatsapp: "556184870307"}, 
        { nome: "FANIA SENA", apartamento: "802-A", whatsapp: "556184870307"},  
        { nome: "JULLY SENA", apartamento: "802-A", whatsapp: "556184870307"}, 
        { nome: "CAIO SENA", apartamento: "802-A", whatsapp: "556184870307"},    
        { nome: "RANNY ISABELLY", apartamento: "802-A", whatsapp: "556184870307"},
        //803-A
        { nome: "ANDRE GASPAR", apartamento: "803-A", whatsapp: "5561983891999"},
        //804-A
        { nome: "CRISTIANO EDUARDO", apartamento: "804-A", whatsapp: "5561985872690"},
        //901-A
        { nome: "THAISE ALVES", apartamento: "901-A", whatsapp: "5561983891999"}, 
        { nome: "BRUNO DANTAS", apartamento: "901-A", whatsapp: "5561983891999"},
        //902-A
        { nome: "WILSON SAMPAIO ", apartamento: "902-A", whatsapp: "5561993042918"}, 
        { nome: "RENATA DA SILVA", apartamento: "902-A", whatsapp: "5561993042918"},  
        { nome: "JENIFFER BRUNA", apartamento: "902-A", whatsapp: "5561993042918"}, 
        { nome: "THIAGO AQUINO ", apartamento: "902-A", whatsapp: "5561993042918"},    
        { nome: "STEFANNY AQUINO ", apartamento: "902-A", whatsapp: "5561993042918"},
        //903-A
        { nome: "ROBERTO GONÇALVES", apartamento: "903-A", whatsapp: "5561999311206"}, 
        { nome: "MARUSKA MORAES", apartamento: "903-A", whatsapp: "5561999311206"},  
        { nome: "ISABELA MORAES", apartamento: "903-A", whatsapp: "5561999311206"}, 
        { nome: "ELOISA MORAES", apartamento: "903-A", whatsapp: "5561999311206"},    
        //904-A
        { nome: "JOAO DE DEUS ", apartamento: "904-A", whatsapp: "5561999311206"}, 
        { nome: "TANIA MAURICIO", apartamento: "904-A", whatsapp: "5561999311206"},  
        { nome: "PEDRO EUARDO ", apartamento: "904-A", whatsapp: "5561999311206"}, 
        { nome: "LORENA CARVALHO", apartamento: "904-A", whatsapp: "5561999311206"},
        //1001-A
        { nome: "CARLOS ROBERTO", apartamento: "1001-A", whatsapp: "5561992640640"},
        { nome: "IRADI APARECIDA", apartamento: "1001-A", whatsapp: "5561992640640"},
        { nome: "JULIANA DE SOUZA", apartamento: "1001-A", whatsapp: "5561992640640"},
        //1002-A
        { nome: "DOUGLAS MIKAEL", apartamento: "1002-A", whatsapp: "5561981853279"},
        { nome: "RAQUEL BATISTA", apartamento: "1002-A", whatsapp: "5561981853279"},
        { nome: "BENAJMIM OLIVEIRA", apartamento: "1002-A", whatsapp: "5561981853279"},
        //1003-A
        { nome: "FABIO SOARES", apartamento: "1003-A", whatsapp: "5561992658159"},
        { nome: "LUCIANA POLICENO", apartamento: "1003-A", whatsapp: "5561992658159"},
        { nome: "PEDRO LUCAS", apartamento: "1003-A", whatsapp: "5561992658159"},
        { nome: "JOAO PAULO", apartamento: "1003-A", whatsapp: "5561992658159"},
        //1004-A
        { nome: "ARICELIO FELIX", apartamento: "1004-A", whatsapp: "5561996274951"},
        { nome: "ANA CAROLINA", apartamento: "1004-A", whatsapp: "561996274951"},
        { nome: "ANA CLARA", apartamento: "1004-A", whatsapp: "561996274951"},
        //1101-A
        { nome: "GABRIELA MAGALHAES", apartamento: "1101-A", whatsapp: "5561998343240"},
        //1102-A
        { nome: "LUANA NUNES", apartamento: "1102-A", whatsapp: "5561991058744"},
        { nome: "LAIS NUNES", apartamento: "1102-A", whatsapp: "5561991058744"},
        { nome: "RAFAEL VINICIUS", apartamento: "1102-A", whatsapp: "5561991058744"},
        //1103-A
        { nome: "RODOLFO LEULER", apartamento: "1103-A", whatsapp: " 5561996092507"},
        { nome: "YANNE BEATRIZ", apartamento: "1103-A", whatsapp: "561996092507"},
        //1104-A
        { nome: "ALINE MARTINS", apartamento: "1104-A", whatsapp: "5561999770586"},
        { nome: "MAIANE CASTRO", apartamento: "1104-A", whatsapp: "5561999770586"},
        { nome: "VITORIA RODRIGUES", apartamento: "1104-A", whatsapp: "5561999770586"},
        { nome: "NAELIA PEREIRA", apartamento: "1104-A", whatsapp: "5561999770586"},
        //1201A
        { nome: "FERNANDA MARQUES", apartamento: "1201-A", whatsapp: "5561985574947"},
        { nome: "ESTER MARQUES", apartamento: "1201-A", whatsapp: "5561985574947"},
        { nome: "ITALO ARAUJO", apartamento: "1201-A", whatsapp: "5561985574947"},
        //1202A
        { nome: "BRUNO ROCHA", apartamento: "1202-A", whatsapp: "5561992192613"},
        { nome: "ELIDIANE LIMA", apartamento: "1202-A", whatsapp: "5561992192613"},
        { nome: "ISABELA LIMA", apartamento: "1202-A", whatsapp: "5561992192613"},
        //1203A
        { nome: "AMANDA LEAL", apartamento: "1203-A", whatsapp: "5561986816681"},
        { nome: "DIEGO REIS", apartamento: "1203-A", whatsapp: "5561986816681"},
        { nome: "DANIEL REIS", apartamento: "1203-A", whatsapp: "5561986816681"},
        //1204A
        { nome: "ISADORA CHAVES", apartamento: "1204-A", whatsapp: "5561998349150"},
        //1301A
        { nome: "VINICIUS SOUSA", apartamento: "1301-A", whatsapp: "5561982228025"},
        { nome: "ALIANA SERPA", apartamento: "1301-A", whatsapp: "5561982228025"},
        //1302A
        { nome: "ELIETE LOPES", apartamento: "1302-A", whatsapp: "5561992013255"},
        { nome: "RYCHELME LOPES", apartamento: "1302-A", whatsapp: "5561992013255"},
        { nome: "GABRIEL OLIVEIRA", apartamento: "1302-A", whatsapp: "5561992013255"},
        { nome: "CRISTIANE OLIVEIRA", apartamento: "1302-A", whatsapp: "5561992013255"},
        //1303A
        { nome: "EDMILSON ARAUJO", apartamento: "1303-A", whatsapp: "5561998816889"},
        { nome: "ANDRESSA GONÇALVES", apartamento: "1303-A", whatsapp: "5561998816889"},
        { nome: "DANIEL TELES", apartamento: "1303-A", whatsapp: "5561998816889"},
        //1304A
        { nome: "LUCAS ALENCAR", apartamento: "1304-A", whatsapp: "5561991047997"},
        //1401A
        { nome: "ANDERSON LUIZ", apartamento: "1401-A", whatsapp: "5561999892201"},
        { nome: "LEIDIJANE NOGUEIRA", apartamento: "1401-A", whatsapp: "5561999892201"},
        { nome: "GABRIEL NOGUEIRA", apartamento: "1401-A", whatsapp: "5561999892201"},
        { nome: "LUCAS NOGUEIRA", apartamento: "1401-A", whatsapp: "5561999892201"},
        { nome: "LETICIA NOGUEIRA", apartamento: "1401-A", whatsapp: "5561999892201"},
        //1402A
        { nome: "ALEXANDRE TAVARES", apartamento: "1402-A", whatsapp: "5561981118588"},
        { nome: "GABRIEL TAVARES", apartamento: "1402-A", whatsapp: "5561981118588"},

        //BLOCO B
        //101B
        { nome: "WILLIAN BRAGA", apartamento: "101-B", whatsapp: "5561981975856"},
        { nome: "FLAVIO DOS SANTOS", apartamento: "101-B", whatsapp: "5561981975856"},
        { nome: "ANA FLAVIA NERES", apartamento: "101-B", whatsapp: "5561981975856"},
        { nome: "HELENA DOS SANTOS", apartamento: "101-B", whatsapp: "5561981975856"},
        //102B
        { nome: "LUCAS ADERALDO", apartamento: "102-B", whatsapp: "5561992094977"},
        { nome: "SILVANA DE SOUZA", apartamento: "102-B", whatsapp: "5561992094977"},
        { nome: "VICTOR ADERALDO", apartamento: "102-B", whatsapp: "5561992094977"},
        //103B
        { nome: "ROBERTO", apartamento: "103-B", whatsapp: "5561992255173"},
        //104B
        { nome: "ELENILDA MARIAL DE OLIVEIRA", apartamento: "104-B", whatsapp: "5561982178292"},
        { nome: "LUIZ FERNANDO", apartamento: "104-B", whatsapp: "5561982178292"},
        { nome: "IABELLY FIGUEREDO", apartamento: "104-B", whatsapp: "5561982178292"},
        { nome: "KATE DAYANNE", apartamento: "104-B", whatsapp: "5561982178292"},
        { nome: "ANTONIO MARIAL DE OLIVEIRA", apartamento: "104-B", whatsapp: "5561982178292"},
        { nome: "HAYANNE MARIAL DE OLIVEIRA", apartamento: "104-B", whatsapp: "5561982178292"},
        //201B
        { nome: "ADEMIR DE ARAUJO", apartamento: "201-B", whatsapp: "5562982380112"},
        { nome: "KEYLLANE MARQUES", apartamento: "201-B", whatsapp: "5562982380112"},
        //202B
        { nome: "GERULINA FRANÇA", apartamento: "202-B", whatsapp: "5561992078503"},
        { nome: "ELIZANDRA FRANÇA", apartamento: "202-B", whatsapp: "5561992078503"},
        { nome: "FRANCISCO FERREIRA", apartamento: "202-B", whatsapp: "5561992078503"},
        { nome: "LUANA FRANÇA", apartamento: "202-B", whatsapp: "5561992078503"},
        //203B
        { nome: "MARCO ELI DA SILVA", apartamento: "203-B", whatsapp: "5561999721883"},
        { nome: "MARIA DO SOCORRO", apartamento: "203-B", whatsapp: "5561999721883"},
        { nome: "ENZO ARAUJO", apartamento: "203-B", whatsapp: "5561999721883"},
        //204B
        { nome: "ANTONIO BARBOSA", apartamento: "204-B", whatsapp: "5561982173630"},
        { nome: "VILMA ALVES", apartamento: "204-B", whatsapp: "5561982173630"},
        { nome: "FABRICIO ALVES", apartamento: "204-B", whatsapp: "5561982173630"},
        { nome: "ANA JULIA", apartamento: "204-B", whatsapp: "5561982173630"},
        //301B
        { nome: "RADIGUNDE MAGALHÃES", apartamento: "301-B", whatsapp: "5561999834234"},
        { nome: "MARCIO CAMPELO", apartamento: "301-B", whatsapp: "5561999834234"},
        { nome: "SIMARA", apartamento: "301-B", whatsapp: "5561999834234"},
        { nome: "CLAUDIA SALES", apartamento: "301-B", whatsapp: "5561999834234"},
        //302B
        { nome: "FABIO DE ALBUQUERQUE", apartamento: "302-B", whatsapp: "5561984358506"},
        //303B
        { nome: "ANILTON SOARES", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "MARIA BETANIA", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "EMILY JESSICA", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "AMANDA LARISSA", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "LEVI HUGO", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "ANTONIO EDSON", apartamento: "303-B", whatsapp: "5561992141611"},
        { nome: "CRISTOPHER GUSTAVO", apartamento: "303-B", whatsapp: "5561992141611"},
        //304B
        { nome: "INGRID FERREIRA", apartamento: "304-B", whatsapp: "5561981478767"},
        //401B
        { nome: "JOSE AFONSO", apartamento: "401-B", whatsapp: "5561996666892"},
        { nome: "GUILHERME PEIXOTO", apartamento: "401-B", whatsapp: "5561996666892"},
        { nome: "REGINA CELIA", apartamento: "401-B", whatsapp: "5561996666892"},
        //402B
        { nome: "ANDRE DA CRUZ", apartamento: "402-B", whatsapp: "5561985174234"},
        { nome: "CAMILA CRISTINE", apartamento: "402-B", whatsapp: "5561985174234"},
        { nome: "HEITOR FERREIRA", apartamento: "402-B", whatsapp: "5561985174234"},
        //403B
        { nome: "MARIA ABADIA", apartamento: "403-B", whatsapp: "5561981673491"},
        { nome: "JESSICA GONÇALVES", apartamento: "403-B", whatsapp: "5561981673491"},
        //404B
        { nome: "IAGO GLORIA", apartamento: "404-B", whatsapp: "5561999692969"},
        { nome: "MARGARIDA IRENE", apartamento: "404-B", whatsapp: "5561999692969"},
        //501B
        { nome: "SERGIO RIRCADO", apartamento: "501-B", whatsapp: "5561985443707"},
        { nome: "CINTIA CAROLINE", apartamento: "501-B", whatsapp: "5561985443707"},
        { nome: "ANA LUIZA", apartamento: "501-B", whatsapp: "5561985443707"},
        { nome: "ISABELLE DA SILVA", apartamento: "501-B", whatsapp: "5561985443707"},
        //502B
        { nome: "RUFINA DOS SANTOS", apartamento: "502-B", whatsapp: "5561996524070"},
        { nome: "CLAUDIO DOS SANTOS", apartamento: "502-B", whatsapp: "5561996524070"},
        //503B
        { nome: "ADRIANO DA SILVA", apartamento: "503-B", whatsapp: "5561981408692"},
        { nome: "KARINA CEIA", apartamento: "503-B", whatsapp: "5561981408692"},
        { nome: "ALEX VINICIUS", apartamento: "503-B", whatsapp: "5561981408692"},
        //504B
        { nome: "MARIA BEZERRA", apartamento: "504-B", whatsapp: "5561981919776"},
        { nome: "DENISE CARVALHO", apartamento: "504-B", whatsapp: "5561981919776"},
        { nome: "RACHEL CARVALHO", apartamento: "504-B", whatsapp: "5561981919776"},
        { nome: "ISABELA CARVALHO", apartamento: "504-B", whatsapp: "5561981919776"},
        //601B
        { nome: "EMERSON MENDES", apartamento: "601-B", whatsapp: "5561981752426"},
        { nome: "ELIENE DOS SANTOS", apartamento: "601-B", whatsapp: "5561981752426"},
        { nome: "ANA BEATRIZ", apartamento: "601-B", whatsapp: "5561981752426"},
        { nome: "RAYSSA BALEGIRO", apartamento: "601-B", whatsapp: "5561981752426"},
        //602B
        { nome: "HELVIO LOBATO", apartamento: "602-B", whatsapp: "5561998102203"},
        { nome: "LILIAN ARAUJO", apartamento: "602-B", whatsapp: "5561998102203"},
        //603B
        { nome: "IAGO MOREIRA", apartamento: "603-B", whatsapp: "5561995567856"},
        { nome: "MARIA IVANI", apartamento: "603-B", whatsapp: "5561995567856"},
        { nome: "FRANCISCO AMOLETO", apartamento: "603-B", whatsapp: "5561995567856"},
        { nome: "MARIA MOREIRA", apartamento: "603-B", whatsapp: "5561995567856"},
        { nome: "EDSON PINTO", apartamento: "603-B", whatsapp: "5561995567856"},
        //604B
        { nome: "FRANCISCA FERNANDA", apartamento: "604-B", whatsapp: "5561985367162"},
        { nome: "GENIVAL DA SILVA", apartamento: "604-B", whatsapp: "5561985367162"},
        { nome: "GABRIEL NASCIMENTO", apartamento: "604-B", whatsapp: "5561985367162"},
        { nome: "FRANCISCA DAS CHAGAS", apartamento: "604-B", whatsapp: "5561985367162"},
        //701B
        { nome: "MARCIA MICHELINE", apartamento: "701-B", whatsapp: "5561999673270"},
        { nome: "ELDER RAYLAN", apartamento: "701-B", whatsapp: "5561999673270"},
        { nome: "ANA CLARA MEDEIROS", apartamento: "701-B", whatsapp: "5561999673270"},
        { nome: "HIAGO MEDEIROS ", apartamento: "701-B", whatsapp: "5561999673270"},
        //702B
        { nome: "SILVANA PEREIRA", apartamento: "702-B", whatsapp: "5561982992901"},
        //703B
        { nome: "BIANCA JAMILE", apartamento: "703-B", whatsapp: "5561991208282"},
        { nome: "ESTER NASCIMENTO", apartamento: "703-B", whatsapp: "5561991208282"},
        { nome: "VINNICIUS WILSON", apartamento: "703-B", whatsapp: "5561991208282"},
        //704B
        { nome: "MALBA SIBELY", apartamento: "704-B", whatsapp: "5561994578927"},
        //801B
        { nome: "JONNY WILSON", apartamento: "801-B", whatsapp: "5561984400264"},
        { nome: "JOAO GABRIEL ", apartamento: "801-B", whatsapp: "5561984400264"},
        { nome: "ARTHUR VOGADO", apartamento: "801-B", whatsapp: "5561984400264"},
        //802B
        { nome: "MARIA MONICA", apartamento: "802-A", whatsapp: "5561981177002"},
        { nome: "POLARI COELHO", apartamento: "802-A", whatsapp: "5561981177002"},
        { nome: "MAISA RODRIGUES", apartamento: "802-A", whatsapp: "5561981177002"},
        //803B
        { nome: "", apartamento: "", whatsapp: ""},
        //804B
        { nome: "LUAN FERNANDES", apartamento: "804-B", whatsapp: "5561982061951"},
        //901B
        { nome: "WALBER RESENDE", apartamento: "901-B", whatsapp: "5561985852335"},
        { nome: "ILZA FERREIRA", apartamento: "901-B", whatsapp: "5561985852335"},
        { nome: "GRAZIELLE COSTA", apartamento: "901-B", whatsapp: "5561985852335"},
        { nome: "YASMIN RODRIGUES", apartamento: "901-B", whatsapp: "5561985852335"},
        { nome: "GUILHERME SAMAMPAIO", apartamento: "901-B", whatsapp: "5561985852335"},
        //902B
        { nome: "DAYANE RODRIGUES", apartamento: "902-B", whatsapp: "5561993077120"},
        { nome: "LUSANIRA RODRIGUES", apartamento: "902-B", whatsapp: "5561993077120"},
        { nome: "GUSTAVO OLIVEIRA", apartamento: "902-B", whatsapp: "5561993077120"},
        //903B
        { nome: "PÂMELA INOCÊNCIO", apartamento: "903-B", whatsapp: "5561991913433"},
        { nome: "DANIEL CHRISTOPHER", apartamento: "903-B", whatsapp: "5561991913433"},
        { nome: "SILVANA INOCÊNCIO", apartamento: "903-B", whatsapp: "5561991913433"},
        //904B
        { nome: "ELZA MARIA", apartamento: "904-B", whatsapp: "5561995553569"},
        { nome: "FRANCISCO DAS CHAGAS", apartamento: "904-B", whatsapp: "5561995553569"},
        //1001B
        { nome: "POLIANA GUIMARAES", apartamento: "1001-B", whatsapp: "5561985997633"},
        { nome: "RENDEL GUIMARAES", apartamento: "1001-B", whatsapp: "5561985997633"},
        { nome: "GLAUCIANE GUIMARAES", apartamento: "1001-B", whatsapp: "5561985997633"},
        { nome: "FRANCISCO KLEITON", apartamento: "1001-B", whatsapp: "5561985997633"},
        { nome: "GLEISON GUIMARAES", apartamento: "1001-B", whatsapp: "5561985997633"},
        { nome: "POLLYANA BARROSO", apartamento: "1001-B", whatsapp: "5561985997633"},
        //1002B
        { nome: "JANAIDES DANTAS", apartamento: "1002-B", whatsapp: "5561999029770"},
        { nome: "PEDRO VALERIO", apartamento: "1002B", whatsapp: "5561999029770"},
        //1003B
        { nome: "GRAZIELLE DORNELES", apartamento: "1003-B", whatsapp: "5561993526838"},
        { nome: "MARCELO MOREIRA", apartamento: "1003-B", whatsapp: "5561993526838"},
        //1004-B
        { nome: "JASIEL SILVA", apartamento: "1004-B", whatsapp: "5561981042595"},
        //1101
        { nome: "DANIELLE APARECIDA", apartamento: "1101-B", whatsapp: "5561985221171"},
        { nome: "THIAGO MATOS", apartamento: "1101-B", whatsapp: "5561985221171"},
        { nome: "ELENI APARECIDA", apartamento: "1101-B", whatsapp: "5561985221171"},
        { nome: "CLEIBER DA SILVA", apartamento: "1101-B", whatsapp: "5561985221171"},
        { nome: "PATRICIA MARIA", apartamento: "1101-B", whatsapp: "5561985221171"},
        //1102
        { nome: "ANDERSON DE SOUSA", apartamento: "1102-B", whatsapp: "5561986339730"},
        { nome: "DAIANNE RODRIGUES", apartamento: "1102-B", whatsapp: "5561986339730"},
        { nome: "ARTHUR GABRIEL", apartamento: "1102-B", whatsapp: "5561986339730"},
        //1103
        { nome: "WANESSA CRISTINA", apartamento: "1103-B", whatsapp: "5561982908002"},
        { nome: "THIAGO SANTANA", apartamento: "1103-B", whatsapp: "5561982908002"},
        { nome: "SHEILA MARIA", apartamento: "1103-B", whatsapp: "5561982908002"},
        { nome: "CLAUDENOR JOSE", apartamento: "1103-B", whatsapp: "5561982908002"},
        { nome: "RAPHAEL KESLEY", apartamento: "1103-B", whatsapp: "5561982908002"},
        { nome: "GABRIELY CRISTINNE", apartamento: "1103-B", whatsapp: "5561982908002"},
        //1104
        { nome: "CASSIO HENRIQUE", apartamento: "1104-B", whatsapp: "5561985391506"},
        { nome: "EMILY RAQUEL", apartamento: "1104-B", whatsapp: "5561985391506"},
        { nome: "DIONEY NUNES", apartamento: "1104-B", whatsapp: "5561985391506"},
        { nome: "DEVANI DE OLIVEIRA", apartamento: "1104-B", whatsapp: "5561985391506"},
        { nome: "BRUNA NUNES", apartamento: "1104-B", whatsapp: "5561985391506"},
        //1201B
        { nome: "MARIA GENILDA", apartamento: "1201-B", whatsapp: "5561982425998"},
        { nome: "JOSE FERNANDO", apartamento: "1201-B", whatsapp: "5561982425998"},
        { nome: "FABIO GERALDO", apartamento: "1201-B", whatsapp: "5561982425998"},
        { nome: "CAROLINE PINHEIRO", apartamento: "1201-B", whatsapp: "5561982425998"},
        { nome: "MIGUEL PINHEIRO", apartamento: "1201-B", whatsapp: "5561982425998"},
        { nome: "LIVIA PINHEIRO", apartamento: "1201-B", whatsapp: "5561982425998"},
        //1202B
        { nome: "VICTOR HUGO", apartamento: "1202-B", whatsapp: "5561985401939"},
        { nome: "JESSICA PAULA", apartamento: "1202-B", whatsapp: "5561985401939"},
        //1203B
        { nome: "JOILTON MARTINS", apartamento: "1203-B", whatsapp: "5561984588195"},
        { nome: "LENICE PEREIRA", apartamento: "1203-B", whatsapp: "5561984588195"},
        { nome: "DAVI SANTOS", apartamento: "1203-B", whatsapp: "5561984588195"},
        { nome: "JADE SANTOS", apartamento: "1203-B", whatsapp: "5561984588195"},
        //1204B
        { nome: "SARA CRUZ", apartamento: "1204-B", whatsapp: "5561993501107"},
        { nome: "SAMUEL CAJE", apartamento: "1204-B", whatsapp: "5561993501107"},
        { nome: "KALEB MOTA", apartamento: "1204-B", whatsapp: "5561993501107"},
        { nome: "KALITA DE OLIVEIRA", apartamento: "1204-B", whatsapp: "5561993501107"},
        //1301B
        { nome: "DIEGO ACACIO", apartamento: "1301-B", whatsapp: "5561981386316"},
        { nome: "SOFHIA GABRIELLY", apartamento: "1301-B", whatsapp: "5561981386316"},
        { nome: "SARA HELOISA", apartamento: "1301-B", whatsapp: "5561981386316"},
        { nome: "DANIEL MACEDO", apartamento: "1301-B", whatsapp: "5561981386316"},
        { nome: "JOSEMAR BARBOSA", apartamento: "1301-B", whatsapp: "5561981386316"},
        //1302B
        { nome: "NUBIA ROCHA", apartamento: "1302-B", whatsapp: "5561991165555"},
        //1303B
        { nome: "AILTON MANOEL", apartamento: "1303-B", whatsapp: "5561984312447"},
        { nome: "HELEN CRISTINA", apartamento: "1303-B", whatsapp: "5561984312447"},
        { nome: "RONDINELY MARCOLINO", apartamento: "1303-B", whatsapp: "5561984312447"},
        //1304B
        { nome: "WELLINGTON RONCE", apartamento: "1304-B", whatsapp: "5561984578616"},
        { nome: "SAMUEL LIONES", apartamento: "1304-B", whatsapp: "5561984578616"},
        { nome: "SARA LIONES", apartamento: "1304-B", whatsapp: "5561984578616"},
        //1401B
        { nome: "SIMONIA ALVES", apartamento: "1401-B", whatsapp: "5561981103200"},
        { nome: "ENZO BOAVENTURA", apartamento: "1401-B", whatsapp: "5561981103200"},
        { nome: "ADELTO SOARES", apartamento: "1401-B", whatsapp: "5561981103200"},
        //1402B
        { nome: "HELIO PESSOA", apartamento: "1402-B", whatsapp: "5561986164309"},
        { nome: "MARCIA PESSOA", apartamento: "1402-B", whatsapp: "5561986164309"},
        { nome: "JOAO PAULO PESSOA", apartamento: "1402-B", whatsapp: "5561986164309"},
        { nome: "SARAH LAISSA", apartamento: "1402-B", whatsapp: "5561986164309"}

             ]; // fim do bancodedados

// Array para armazenar os dados
let listaDados = JSON.parse(localStorage.getItem('listaDados')) || [];
let registrosExclusao = JSON.parse(localStorage.getItem('registrosExclusao')) || [];

//assinatura eletronica 
let indexParaExcluir = null;
let canvas, ctx;
let desenhando = false;

// Função para buscar o número de WhatsApp no "banco de dados"
function buscarWhatsApp(nome, apartamento) {
    if (!nome || !apartamento) {
        console.error('Nome ou apartamento não fornecido.');
        return null;
    }

    const morador = bancoDeDadosMoradores.find(m => 
        m.nome.toLowerCase().split[0] === nome.toLowerCase().split[0] &&
        m.apartamento.toLowerCase() === apartamento.toLowerCase() //split salva vidas !!!!!!!!!
    );

    return morador ? morador.whatsapp : null;
}


// Função para gerar o link do WhatsApp 
function gerarLinkWhatsApp(nome,apartamento) {
    const numeroWhatsApp = buscarWhatsApp(nome,apartamento);
    if (!numeroWhatsApp) {
        alert("Número de WhatsApp não encontrado para este morador.");
        return "#";
    }
    const mensagem = encodeURIComponent(`Olá, entrega para ${nome}, uma encomenda para a unidade ${apartamento} chegou, assim que possível venha retira-la na portaria, obrigado.`);
    return `whatsapp://send?phone=${numeroWhatsApp}&text=${mensagem}`;
}

// Função para salvar e exibir os dados
function salvarDados(event) {
    event.preventDefault();  // Impede o envio do formulário e recarga da página

    // Pegando os valores dos campos do formulário
    const nome = document.getElementById('nome').value;
    const apartamento = document.getElementById('apartamento').value;
    const quantidade = document.getElementById('quantidade').value;
    const data = document.getElementById('data').value;
    const codigo = document.getElementById('codigo').value;

    // Criando o objeto com os dados do formulário
    const dado = {
        nome: nome,
        apartamento: apartamento,
        quantidade: parseInt(quantidade, 10),
        data: data,
        codigo: codigo,
        linkWhatsApp: gerarLinkWhatsApp(nome,apartamento)
    };

    // Adicionando o novo dado ao array
    listaDados.push(dado);

    // Salvando o array atualizado no LocalStorage
    localStorage.setItem('listaDados', JSON.stringify(listaDados));

    // Atualizando a lista de dados na interface
    atualizarLista();

    // Limpando o formulário
    document.getElementById('formCadastro').reset();
}

// Função para atualizar a lista de dados exibidos
function atualizarLista() {
    const lista = document.getElementById('listaDados');
    lista.innerHTML = '';  // Limpa a lista antes de atualizá-la

    let totalQuantidade = 0;  // Inicializa o total de quantidade

    

    // Iterando sobre todos os dados salvos no array e adicionando à lista
    listaDados.forEach((dado, index) => {
        totalQuantidade += dado.quantidade;

        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Nome:</strong> ${dado.nome}<br>
            <strong>Apartamento:</strong> ${dado.apartamento}<br>
            <strong>Quantidade:</strong> ${dado.quantidade}<br>
            <strong>Data:</strong> ${dado.data}<br>
            <strong>Código do Produto:</strong> ${dado.codigo}<br>
            <button onclick="excluirDado(${index})">Excluir</button>
            <button onclick="adicionarQuantidade(${index})">Adicionar nova encomenda</button>
            <a href="${dado.linkWhatsApp}" target="_blank"><img src="logoW.png" id="logo"></a><br>
        `;
        lista.appendChild(item);
    });

    // Exibe o total de quantidade
    const totalDisplay = document.getElementById('totalQuantidade');
    totalDisplay.textContent = `Quantidade Total: ${totalQuantidade}`;
}

// Função para adicionar quantidade a um dado existente
function adicionarQuantidade(index) {
    const quantidadeAdicional = prompt("Insira a quantidade adicional:");
    if (quantidadeAdicional && !isNaN(quantidadeAdicional)) {
        listaDados[index].quantidade += parseInt(quantidadeAdicional, 10);

        // Atualizando o LocalStorage
        localStorage.setItem('listaDados', JSON.stringify(listaDados));

        atualizarLista();  // Atualiza a lista exibida
    } else {
        alert("Por favor, insira um número válido.");
    }
}
//MODIFICAÇÃO

function excluirDado(index) {
    const nomeRecebedor = prompt("Por favor, insira o nome do recebedor:");
    if (!nomeRecebedor) {
        alert("A exclusão foi cancelada.");
        return;
    }

    const horaRecebimento = new Date().toLocaleTimeString();
    const dataRecebimento = new Date().toLocaleDateString();

    const registroExclusao = {
        ...listaDados[index],
        recebedor: nomeRecebedor,
        hora: horaRecebimento,
        timestamp: new Date().getTime() // salva o momento exato da exclusão
    };
    

    // Atualizando a lista de registros de exclusão
    registrosExclusao.push(registroExclusao);

    // Atualizando o LocalStorage para registros de exclusão
    localStorage.setItem('registrosExclusao', JSON.stringify(registrosExclusao));

    // Removendo o dado da lista principal
    listaDados.splice(index, 1);

    // Atualizando o LocalStorage da lista principal
    localStorage.setItem('listaDados', JSON.stringify(listaDados));

    atualizarLista();  // Atualiza a lista exibida
    exibirExclusoesUltimas24h();
}

//exclusões 24h
function exibirExclusoesUltimas24h() {
    const agora = new Date().getTime();
    const umDia = 24 * 60 * 60 * 1000;

    const lista = document.getElementById('listaExclusoes24h');
    lista.innerHTML = '';

    const exclusoesRecentes = registrosExclusao.filter(registro => agora - registro.timestamp <= umDia);

    exclusoesRecentes.forEach(registro => {
        const item = document.createElement('li');
        item.innerHTML = `
            <strong>Nome:</strong> ${registro.nome}<br>
            <strong>Apartamento:</strong> ${registro.apartamento}<br>
            <strong>Quantidade:</strong> ${registro.quantidade}<br>
            <strong>Data:</strong> ${registro.data}<br>
            <strong>Código:</strong> ${registro.codigo}<br>
            <strong>Recebedor:</strong> ${registro.recebedor}<br>
            <strong>Hora:</strong> ${registro.hora}<br><hr>
        `;
        lista.appendChild(item);
    });
}


//filtrar lista
function filtrarLista() {
    const termo = document.getElementById('campoBusca').value.toLowerCase();
    const lista = document.getElementById('listaDados');
    lista.innerHTML = '';
    let totalQuantidade = 0;

    listaDados.forEach((dado, index) => {
        const nome = dado.nome.toLowerCase();
        const apartamento = dado.apartamento.toLowerCase();

        if (nome.includes(termo) || apartamento.includes(termo)) {
            totalQuantidade += dado.quantidade;

            const item = document.createElement('li');
            item.innerHTML = `
                <strong>Nome:</strong> ${dado.nome}<br>
                <strong>Apartamento:</strong> ${dado.apartamento}<br>
                <strong>Quantidade:</strong> ${dado.quantidade}<br>
                <strong>Data:</strong> ${dado.data}<br>
                <strong>Código do Produto:</strong> ${dado.codigo}<br>
                <button onclick="excluirDado(${index})">Excluir</button>
                <button onclick="adicionarQuantidade(${index})">Adicionar nova encomenda</button>
                <a href="${dado.linkWhatsApp}" target="_blank"><img src="logoW.png" id="logo"></a><br>
            `;
            lista.appendChild(item);
        }
    });

    document.getElementById('totalQuantidade').textContent = `Quantidade Total: ${totalQuantidade}`;
}
//botão pdf

document.getElementById('exportarPdfBtn').addEventListener('click', exportarParaPDF);

function exportarParaPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();

    let y = 10;
    doc.setFontSize(12);
    doc.text("Encomendas Atuais:", 10, y);
    y += 10;

    listaDados.forEach(dado => {
        const texto = 
`Nome: ${dado.nome}
Apartamento: ${dado.apartamento}
Quantidade: ${dado.quantidade}
Data: ${dado.data}
Código: ${dado.codigo}`;
        doc.text(texto, 10, y);
        y += 40;

        // Adiciona nova página se ultrapassar o limite vertical
        if (y > 270) {
            doc.addPage();
            y = 10;
        }
    });

    let total = listaDados.reduce((sum, item) => sum + item.quantidade, 0);
    doc.text(`Quantidade Total: ${total}`, 10, y);

    doc.save("Lista_de_encomendas.pdf");
}





// Inicializa a lista de dados ao carregar a página
atualizarLista();

// Adicionando o evento de envio do formulário
document.getElementById('formCadastro').addEventListener('submit', salvarDados);

// Adicionando o evento para exportar os dados
document.getElementById('exportarBtn').addEventListener('click', exportarParaTxt);











