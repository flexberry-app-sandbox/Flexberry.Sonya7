﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Sonya_7
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Приход денег.
    /// </summary>
    // *** Start programmer edit section *** (ПриходДенег CustomAttributes)

    // *** End programmer edit section *** (ПриходДенег CustomAttributes)
    [AutoAltered()]
    [Caption("Приход денег")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПриходДенегE", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "ТипПрихода as \'Тип прихода\'",
            "Клиенты.ФИО as \'Клиент ФИО\'",
            "Финансисты.ФИО as \'Финансист ФИО\'",
            "Сумма as \'Сумма\'"})]
    [AssociatedDetailViewAttribute("ПриходДенегE", "ПереченьТоваров", "ПереченьТоваровE", true, "", "Перечень товаров", true, new string[] {
            ""})]
    [AssociatedDetailViewAttribute("ПриходДенегE", "ПереченьУслуг", "ПереченьУслугE", true, "", "Перечень услуг", true, new string[] {
            ""})]
    [View("ПриходДенегL", new string[] {
            "ID as \'ID\'",
            "Дата as \'Дата\'",
            "ТипПрихода as \'Тип прихода\'",
            "Клиенты.ФИО as \'Клиент ФИО\'",
            "Финансисты.ФИО as \'Финансист ФИО\'",
            "Сумма as \'Сумма\'"})]
    public class ПриходДенег : ICSSoft.STORMNET.DataObject
    {
        
        private int fID;
        
        private System.DateTime fДата;
        
        private IIS.Sonya_7.ТипПрихода fТипПрихода;
        
        private double fСумма;
        
        private IIS.Sonya_7.Финансисты fФинансисты;
        
        private IIS.Sonya_7.Клиенты fКлиенты;
        
        private IIS.Sonya_7.DetailArrayOfПереченьТоваров fПереченьТоваров;
        
        private IIS.Sonya_7.DetailArrayOfПереченьУслуг fПереченьУслуг;
        
        // *** Start programmer edit section *** (ПриходДенег CustomMembers)

        // *** End programmer edit section *** (ПриходДенег CustomMembers)

        
        /// <summary>
        /// ID.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ID CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ID CustomAttributes)
        public virtual int ID
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ID Get start)

                // *** End programmer edit section *** (ПриходДенег.ID Get start)
                int result = this.fID;
                // *** Start programmer edit section *** (ПриходДенег.ID Get end)

                // *** End programmer edit section *** (ПриходДенег.ID Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ID Set start)

                // *** End programmer edit section *** (ПриходДенег.ID Set start)
                this.fID = value;
                // *** Start programmer edit section *** (ПриходДенег.ID Set end)

                // *** End programmer edit section *** (ПриходДенег.ID Set end)
            }
        }
        
        /// <summary>
        /// Дата.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Дата CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Дата CustomAttributes)
        public virtual System.DateTime Дата
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Дата Get start)

                // *** End programmer edit section *** (ПриходДенег.Дата Get start)
                System.DateTime result = this.fДата;
                // *** Start programmer edit section *** (ПриходДенег.Дата Get end)

                // *** End programmer edit section *** (ПриходДенег.Дата Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Дата Set start)

                // *** End programmer edit section *** (ПриходДенег.Дата Set start)
                this.fДата = value;
                // *** Start programmer edit section *** (ПриходДенег.Дата Set end)

                // *** End programmer edit section *** (ПриходДенег.Дата Set end)
            }
        }
        
        /// <summary>
        /// Сумма.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Сумма CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Сумма CustomAttributes)
        public virtual double Сумма
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Сумма Get start)

                // *** End programmer edit section *** (ПриходДенег.Сумма Get start)
                double result = this.fСумма;
                // *** Start programmer edit section *** (ПриходДенег.Сумма Get end)

                // *** End programmer edit section *** (ПриходДенег.Сумма Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Сумма Set start)

                // *** End programmer edit section *** (ПриходДенег.Сумма Set start)
                this.fСумма = value;
                // *** Start programmer edit section *** (ПриходДенег.Сумма Set end)

                // *** End programmer edit section *** (ПриходДенег.Сумма Set end)
            }
        }
        
        /// <summary>
        /// ТипПрихода.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ТипПрихода CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ТипПрихода CustomAttributes)
        public virtual IIS.Sonya_7.ТипПрихода ТипПрихода
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Get start)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Get start)
                IIS.Sonya_7.ТипПрихода result = this.fТипПрихода;
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Get end)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Set start)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Set start)
                this.fТипПрихода = value;
                // *** Start programmer edit section *** (ПриходДенег.ТипПрихода Set end)

                // *** End programmer edit section *** (ПриходДенег.ТипПрихода Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Клиенты CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Клиенты CustomAttributes)
        [PropertyStorage(new string[] {
                "Клиенты"})]
        [NotNull()]
        public virtual IIS.Sonya_7.Клиенты Клиенты
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Get start)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Get start)
                IIS.Sonya_7.Клиенты result = this.fКлиенты;
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Get end)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Set start)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Set start)
                this.fКлиенты = value;
                // *** Start programmer edit section *** (ПриходДенег.Клиенты Set end)

                // *** End programmer edit section *** (ПриходДенег.Клиенты Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.Финансисты CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.Финансисты CustomAttributes)
        [PropertyStorage(new string[] {
                "Финансисты"})]
        [NotNull()]
        public virtual IIS.Sonya_7.Финансисты Финансисты
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Get start)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Get start)
                IIS.Sonya_7.Финансисты result = this.fФинансисты;
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Get end)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Set start)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Set start)
                this.fФинансисты = value;
                // *** Start programmer edit section *** (ПриходДенег.Финансисты Set end)

                // *** End programmer edit section *** (ПриходДенег.Финансисты Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ПереченьТоваров CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ПереченьТоваров CustomAttributes)
        public virtual IIS.Sonya_7.DetailArrayOfПереченьТоваров ПереченьТоваров
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ПереченьТоваров Get start)

                // *** End programmer edit section *** (ПриходДенег.ПереченьТоваров Get start)
                if ((this.fПереченьТоваров == null))
                {
                    this.fПереченьТоваров = new IIS.Sonya_7.DetailArrayOfПереченьТоваров(this);
                }
                IIS.Sonya_7.DetailArrayOfПереченьТоваров result = this.fПереченьТоваров;
                // *** Start programmer edit section *** (ПриходДенег.ПереченьТоваров Get end)

                // *** End programmer edit section *** (ПриходДенег.ПереченьТоваров Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ПереченьТоваров Set start)

                // *** End programmer edit section *** (ПриходДенег.ПереченьТоваров Set start)
                this.fПереченьТоваров = value;
                // *** Start programmer edit section *** (ПриходДенег.ПереченьТоваров Set end)

                // *** End programmer edit section *** (ПриходДенег.ПереченьТоваров Set end)
            }
        }
        
        /// <summary>
        /// Приход денег.
        /// </summary>
        // *** Start programmer edit section *** (ПриходДенег.ПереченьУслуг CustomAttributes)

        // *** End programmer edit section *** (ПриходДенег.ПереченьУслуг CustomAttributes)
        public virtual IIS.Sonya_7.DetailArrayOfПереченьУслуг ПереченьУслуг
        {
            get
            {
                // *** Start programmer edit section *** (ПриходДенег.ПереченьУслуг Get start)

                // *** End programmer edit section *** (ПриходДенег.ПереченьУслуг Get start)
                if ((this.fПереченьУслуг == null))
                {
                    this.fПереченьУслуг = new IIS.Sonya_7.DetailArrayOfПереченьУслуг(this);
                }
                IIS.Sonya_7.DetailArrayOfПереченьУслуг result = this.fПереченьУслуг;
                // *** Start programmer edit section *** (ПриходДенег.ПереченьУслуг Get end)

                // *** End programmer edit section *** (ПриходДенег.ПереченьУслуг Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПриходДенег.ПереченьУслуг Set start)

                // *** End programmer edit section *** (ПриходДенег.ПереченьУслуг Set start)
                this.fПереченьУслуг = value;
                // *** Start programmer edit section *** (ПриходДенег.ПереченьУслуг Set end)

                // *** End programmer edit section *** (ПриходДенег.ПереченьУслуг Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПриходДенегE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриходДенегE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриходДенегE", typeof(IIS.Sonya_7.ПриходДенег));
                }
            }
            
            /// <summary>
            /// "ПриходДенегL" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПриходДенегL
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПриходДенегL", typeof(IIS.Sonya_7.ПриходДенег));
                }
            }
        }
    }
}
