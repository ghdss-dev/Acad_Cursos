package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.AlunoRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;


import javax.persistence.*;

@Builder // Gerar um Objeto com a classe
@Data  // Fazer Get, Set e To String
@Entity // Para dizer uma Entidade
@AllArgsConstructor // Cria um construtor com todos os argumentos
@NoArgsConstructor // Cria um construtor sem nenhum argumento
@Table(name = "aluno") // Definir a Tabela

public class Aluno {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 45)
    private String nome;

    @Column(name = "telefone", length = 20)
    private String telefone;

    @Column(name = "endereco", length = 45)
    private String endereco;

    @Column(name = "cpf", length = 45)
    private String cpf;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="turma_id", nullable=false)
    private Turma turma;

    public static Aluno of(AlunoRequest request){

        var aluno = new Aluno();
        BeanUtils.copyProperties(request, aluno);
        aluno.setTurma(new Turma(request.getTurmaId()));

        return aluno;
    }

}
