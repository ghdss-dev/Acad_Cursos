package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.Dia_Aula_Request;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "dia_aula")
public class Dia_Aula {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_aula")
    private LocalDate data_aula;

    @OneToMany(mappedBy = "dia_aula")
    private List<Curso> cursos;

    public Dia_Aula (Integer id) { this.id = id;}

    public static Dia_Aula of(Dia_Aula_Request request) {

        var dia_aula = new Dia_Aula();
        BeanUtils.copyProperties(request, dia_aula);

        return dia_aula;
    }
}
