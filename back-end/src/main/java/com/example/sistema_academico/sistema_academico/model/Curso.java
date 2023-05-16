package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.CursoRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;
import javax.persistence.*;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "curso")

public class Curso {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "nomecurso", length = 45)
    private String nomecurso;

    @Column(name = "chaula")
    private Double chaula;

    @Column(name = "chtotal")
    private Double chtotal;

    @Column(name = "turno", length = 45)
    private String turno;

    @Column(name = "valor")
    private Double valor;

    @Column(name = "seg")
    private Integer seg;

    @Column(name = "ter")
    private Integer ter;

    @Column(name = "qua")
    private Integer qua;

    @Column(name = "qui")
    private Integer qui;

    @Column(name = "sex")
    private Integer sex;

    @Column(name = "sab")
    private Integer sab;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="turma_id", nullable = false)
    private Turma turma;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name="curso_id", nullable = false)
    private Dia_Aula dia_aula;

    public static Curso of(CursoRequest request){

        var curso = new Curso();
        BeanUtils.copyProperties(request, curso);
        curso.setTurma(new Turma(request.getTurmaId()));
        curso.setDia_aula(new Dia_Aula(request.getCursoId()));
        return curso;
    }
    
}
