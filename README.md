# Teste técnico SPIRITSEC

## Proposta: 
    Através do Github Actions, criar uma pipeline CI/CD em que, toda vez que um código for submetido na branch “Master”, o Dependabot seja executado e gere alertas.

### 1

Crie um arquivo de fluxo de trabalho (workflow) chamado "dependabot.yml" na pasta ".github/workflows" do seu repositório.

No arquivo "dependabot.yml", defina o evento que disparará a pipeline CI/CD usando a sintaxe abaixo:

yaml
Copy code
on:
  push:
    branches: [master]
Este evento fará com que a pipeline seja executada toda vez que um push for realizado na branch "master".
