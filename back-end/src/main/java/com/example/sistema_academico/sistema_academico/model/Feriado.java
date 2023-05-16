package com.example.sistema_academico.sistema_academico.model;

import com.example.sistema_academico.sistema_academico.dto.request.FeriadoRequest;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.beans.BeanUtils;

import javax.persistence.*;
import java.time.LocalDate;

@Builder
@Data
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "feriado")

public class Feriado {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    @Column(name = "data_feriado")
    private LocalDate data_feriado;

    @Column(name = "descricao", length = 45)
    private String descricao;

    public static Feriado of(FeriadoRequest request) {

        var feriado = new Feriado();
        feriado.setData_feriado(LocalDate.now());
        BeanUtils.copyProperties(request, feriado);

        return feriado;
    }
}
