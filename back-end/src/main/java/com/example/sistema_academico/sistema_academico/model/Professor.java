package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.ProfessorRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "professor")

public class Professor {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nome", length = 45)
    private String nome;

    @Column(name = "telefone", length = 20)
    private String telefone;

    @Column(name = "valorhoraaula", length = 150)
    private Double valorhoraaula;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "turma_id", nullable = false)
    private Turma turma;

    public static Professor of(ProfessorRequest request) {

        var professor = new Professor();
        BeanUtils.copyProperties(request, professor);
        professor.setTurma(new Turma(request.getTurmaId()));

        return professor;
    }
}
