package Sonya_7.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Sonya_7.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: ПереченьМат
 */
@Entity(name = "IISSonya_7ПереченьМат")
@Table(schema = "public", name = "ПереченьМат")
public class PerechenMat {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Количество")
    private Integer количество;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Materialy")
    @Convert("Materialy")
    @Column(name = "Материалы", length = 16, unique = true, nullable = false)
    private UUID _materialyid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Materialy", insertable = false, updatable = false)
    private Materialy materialy;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "RasxodDeneg")
    @Convert("RasxodDeneg")
    @Column(name = "РасходДенег", length = 16, unique = true, nullable = false)
    private UUID _rasxoddenegid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "RasxodDeneg", insertable = false, updatable = false)
    private RasxodDeneg rasxoddeneg;


    public PerechenMat() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getКоличество() {
      return количество;
    }

    public void setКоличество(Integer количество) {
      this.количество = количество;
    }


}