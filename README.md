# REDEesg
Mapeamento inteligente de redes de esgoto sanitário.

(Ao fim do arquivo será disponibilizado um modelo teste com valores para serem usados como exemplo).

## Instruções
Ao iniciar, a primeira tela é de apresentação e contém uma breve descrição, tal qual o livro em que é baseada. 
Ao clicar em ```Começar```, você será direcionado para a tela de projetos, local onde poderão ser encontradas suas redes. Por ser sua primeira visita, você ainda não possui nenhuma.
### Área de Projetos
- Para criar uma nova rede, basta clicar em ```Adicionar``` e inserir o título que deseja dar. Cada rede é completamente customizável e você poderá mudar seu título ou deletá-la a qualquer momento.
- Todas as mudanças feitas em cada rede são salvas automaticamente no **Local Storage** do seu navegador, não sendo necessário salvar manualmente. 
- Para deletar uma rede, clique em ```Excluir``` na área de projetos. Para mudar seu título, clique com o botão direito do seu mouse sobre o título que deseja alterar. Ao ser selecionado, digite o novo título e pressione _Enter_ ou clique em qualquer lugar da tela para salvar a alteração.

### Rede
Ao criar uma nova Rede, você será direcionado para a tela principal de seu projeto.
Ela contém uma tabela contendo seus trechos, um sistema para o versionamento de observações e um botão para exportar o projeto para o Excel. 

#### Trechos
Uma rede é formada por segmentos, também chamados de trechos. Um trecho pode ser um de dois tipos. Vamos chamá-los de **Principais** e **Adjacentes** por enquanto. **Trechos principais** representam o tronco de uma árvore e começam com **"1."**. Por exemplo: **"1.1, 1.2, 1.3, 1.4, ..."**. Como você provavelmente percebeu eles seguem uma ordem, **trechos adjacentes** se comportam da mesma forma, porém com algumas diferenças. Analogamente eles representam os galhos da árvore e começam a partir de **2.1**. Por exemplo, uma rede com **3** "galhos" adjacentes seria representada como: **"2., 3. e 4."**, contendo **N** trechos cada um. 

#### Tabela
A tabela será responsável por exibir todas as informações relevantes a respeito de cada trecho de sua rede. Isso inclui, tanto informações inseridas pelo usuário, quanto parâmetros gerados pela própria aplicação.

#### Observações
Observações são geradas automaticamente dependendo das informações inseridas. Elas têm o intuito de alertar a respeito de eventuais erros e disparidades nos parâmetros de cada trecho. Uma observação significa que em uma circunstância real, sua rede terá problemas. Para consertar isto, faça alterações nos parâmetros pedidos pela observação.
Pelo seu elevado grau de importância, observações são salvas em um histórico de versões e podem ser consultadas a qualquer momento. **Novas observações são criadas apenas na versão em que você se encontra, então certifique-se de que você está em uma na versão desejada para evitar receber a mesma observação.**

### Vazão
Agora que você entende os conceitos básicos da aplicação, de início dirigindo-se à área de ```Vazão de Esgoto Sanitario```, encontrada na parte superior da tela. Insira os dados e clique em ```Calcular```. O preenchimento dos dados de vazão de uma Rede não adiciona novas informações à tabela, servindo apenas como fundação para ditar como seus trechos e consequentemente sua rede irá funcionar.

Pronto, agora basta adicionar, deletar e editar trechos de acordo com as necessidades do seu projeto. A seguir você irá encontrar um modelo exemplo para que possa testar as funcionalidades da aplicação com um projeto real.

**_MODELO TESTE:_** 

**- Vazão**
- População inicial (Pi): **1.000**.
- População Final (Pf): **1.300**.
- Per Capita Agua (q): **250**.
- Coef. Retorno (C.): **0.8**.
- Coef. Dia Maior Consumo (K1): **1.2**.
- Coef. Hora Maior Consumo (K2): **1.5**.
- Vazão Industrial: **0**.
- Taxa de Infiltração: **0.5**.
- Extensão Rede Início (Li): **0.542**.
- Extensão Rede Final (Lf): **0.542**.
---
**- Principais**
- Trecho: **1.1**.
- Comprimento (L): **95**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **18**.
- Cota do Terreno de Jusante: **16.8**.
- Recobrimento Coletor de Montante: **0.9**.
- Ip: **(deixar em branco)**.
- Contribuição: **(deixar em branco)**.
---
- Trecho: **1.2**.
- Comprimento (L): **87**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **16.8**.
- Cota do Terreno de Jusante: **15.9**.
- Recobrimento Coletor de Montante: **(deixar em branco)**.
- Ip: **(deixar em branco)**.
- Contribuição: **(deixar em branco)**.
---
- Trecho: **1.3**.
- Comprimento (L): **92**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **15.9**.
- Cota do Terreno de Jusante: **15**.
- Recobrimento Coletor de Montante: **(deixar em branco)**.
- Ip: **(deixar em branco)**.
- Contribuição: **(deixar em branco)**.
---
- Trecho: **1.4**.
- Comprimento (L): **54**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **15**.
- Cota do Terreno de Jusante: **14.85**.
- Recobrimento Coletor de Montante: **(deixar em branco)**.
- Ip: **(deixar em branco)**.
- Contribuição: **(deixar em branco)**.
---
**- Adjacentes**
- Trecho: **2.1**.
- Comprimento (L): **77**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **16**.
- Cota do Terreno de Jusante: **15.9**.
- Recobrimento Coletor de Montante: **0.9**.
- Ip: **(deixar em branco)**.
- Contribuição: **1.3**.
---
- Trecho: **3.1**.
- Comprimento (L): **74**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **15.2**.
- Cota do Terreno de Jusante: **15**.
- Recobrimento Coletor de Montante: **0.9**.
- Ip: **(deixar em branco)**.
- Contribuição: **1.4**.
---
- Trecho: **4.1**.
- Comprimento (L): **63**.
- Diâmetro (L): **150**.
- Cota do Terreno de Montante: **16**.
- Cota do Terreno de Jusante: **15**.
- Recobrimento Coletor de Montante: **0.9**.
- Ip: **(deixar em branco)**.
- Contribuição: **1.4**.
