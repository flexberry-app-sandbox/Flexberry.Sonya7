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
    /// Перечень товаров.
    /// </summary>
    // *** Start programmer edit section *** (ПереченьТоваров CustomAttributes)

    // *** End programmer edit section *** (ПереченьТоваров CustomAttributes)
    [AutoAltered()]
    [Caption("Перечень товаров")]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("ПереченьТоваровE", new string[] {
            "Количество as \'Количество\'"})]
    public class ПереченьТоваров : ICSSoft.STORMNET.DataObject
    {
        
        private int fКоличество;
        
        private IIS.Sonya_7.Товары fТовары;
        
        private IIS.Sonya_7.ПриходДенег fПриходДенег;
        
        // *** Start programmer edit section *** (ПереченьТоваров CustomMembers)

        // *** End programmer edit section *** (ПереченьТоваров CustomMembers)

        
        /// <summary>
        /// Количество.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьТоваров.Количество CustomAttributes)

        // *** End programmer edit section *** (ПереченьТоваров.Количество CustomAttributes)
        public virtual int Количество
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьТоваров.Количество Get start)

                // *** End programmer edit section *** (ПереченьТоваров.Количество Get start)
                int result = this.fКоличество;
                // *** Start programmer edit section *** (ПереченьТоваров.Количество Get end)

                // *** End programmer edit section *** (ПереченьТоваров.Количество Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьТоваров.Количество Set start)

                // *** End programmer edit section *** (ПереченьТоваров.Количество Set start)
                this.fКоличество = value;
                // *** Start programmer edit section *** (ПереченьТоваров.Количество Set end)

                // *** End programmer edit section *** (ПереченьТоваров.Количество Set end)
            }
        }
        
        /// <summary>
        /// Перечень товаров.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьТоваров.Товары CustomAttributes)

        // *** End programmer edit section *** (ПереченьТоваров.Товары CustomAttributes)
        [PropertyStorage(new string[] {
                "Товары"})]
        [NotNull()]
        public virtual IIS.Sonya_7.Товары Товары
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьТоваров.Товары Get start)

                // *** End programmer edit section *** (ПереченьТоваров.Товары Get start)
                IIS.Sonya_7.Товары result = this.fТовары;
                // *** Start programmer edit section *** (ПереченьТоваров.Товары Get end)

                // *** End programmer edit section *** (ПереченьТоваров.Товары Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьТоваров.Товары Set start)

                // *** End programmer edit section *** (ПереченьТоваров.Товары Set start)
                this.fТовары = value;
                // *** Start programmer edit section *** (ПереченьТоваров.Товары Set end)

                // *** End programmer edit section *** (ПереченьТоваров.Товары Set end)
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Sonya_7.ПриходДенег.
        /// </summary>
        // *** Start programmer edit section *** (ПереченьТоваров.ПриходДенег CustomAttributes)

        // *** End programmer edit section *** (ПереченьТоваров.ПриходДенег CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "ПриходДенег"})]
        public virtual IIS.Sonya_7.ПриходДенег ПриходДенег
        {
            get
            {
                // *** Start programmer edit section *** (ПереченьТоваров.ПриходДенег Get start)

                // *** End programmer edit section *** (ПереченьТоваров.ПриходДенег Get start)
                IIS.Sonya_7.ПриходДенег result = this.fПриходДенег;
                // *** Start programmer edit section *** (ПереченьТоваров.ПриходДенег Get end)

                // *** End programmer edit section *** (ПереченьТоваров.ПриходДенег Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (ПереченьТоваров.ПриходДенег Set start)

                // *** End programmer edit section *** (ПереченьТоваров.ПриходДенег Set start)
                this.fПриходДенег = value;
                // *** Start programmer edit section *** (ПереченьТоваров.ПриходДенег Set end)

                // *** End programmer edit section *** (ПереченьТоваров.ПриходДенег Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "ПереченьТоваровE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View ПереченьТоваровE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("ПереченьТоваровE", typeof(IIS.Sonya_7.ПереченьТоваров));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of ПереченьТоваров.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfПереченьТоваров CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfПереченьТоваров CustomAttributes)
    public class DetailArrayOfПереченьТоваров : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Sonya_7.DetailArrayOfПереченьТоваров members)

        // *** End programmer edit section *** (IIS.Sonya_7.DetailArrayOfПереченьТоваров members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type ПереченьТоваров by index.
        /// </summary>
        /// <summary>
        /// Adds object with type ПереченьТоваров.
        /// </summary>
        public DetailArrayOfПереченьТоваров(IIS.Sonya_7.ПриходДенег fПриходДенег) : 
                base(typeof(ПереченьТоваров), ((ICSSoft.STORMNET.DataObject)(fПриходДенег)))
        {
        }
        
        public IIS.Sonya_7.ПереченьТоваров this[int index]
        {
            get
            {
                return ((IIS.Sonya_7.ПереченьТоваров)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Sonya_7.ПереченьТоваров dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
