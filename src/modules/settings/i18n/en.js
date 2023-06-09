export default {
  settings: {
    shared: {
      menu: {
        generalSettings: 'General Settings',
        rentalsSettings: 'Rentals Settings',
        payments: 'Payments',
        salesChannels: 'Sales Channels',
        services: 'Services',
        fees: 'Fees & Taxes',
        rates: 'Rates',
        seasonRates: 'Season Rates',
        customerContacts: 'Customer Contacts',
      },
      actions: {
        edit: 'Edit',
        delete: 'Delete',
      },
      cancel: 'Cancel',
      close: 'Close',
      save: 'Save',
    },
    components: {
      globalSeasonRateCreate: {
        title: 'Create a Season Rate',
        description: 'Provide different pricing for a specific season',
        cancel: 'Cancel',
        create: 'Create',
        name: 'Name',
        rate: 'Rate',
        rateLabel: 'Rate template',
        saveSuccess: 'A season rate has been created successfully!',
      },
      serviceInfo: {
        title: 'Services',
        description: 'Set extra services for your rentals.',
        name: 'Name',
        duration: 'Duration',
        hours: 'hours',
        descriptionField: 'Description',
        provider: 'Provider',
        timing: 'Timing',
        calculationModel: 'Calculation Model',
        calculationModelDescription: 'Define how the fee should be calculated.',
        sales: 'Set the sales tax / VAT of your service',
        currency: 'Currency',
        amount: 'Amount',
        amountPlaceholder: 'e.g. 100 {sign}',
        percentPlaceholder: 'e.g. 19%',
        calculationType: 'Calculation Type',
        durationEnabled: 'Duration',
        charge: 'Charge Type',
        chargeTooltip: 'Select whether this fee must be applied for each night separately or just once per booking',
        noProviders: 'Don\'t have any service provider you need?',
        createProvider: 'create a new one',
        successUpdate: 'Your service info has been updated successfully!',
        saveDisabled: 'You are not allowed to update this service',
      },
      serviceNotifications: {
        title: 'Set Reminders',
        description: 'Set a Reminder for the above Service',
        notificationType: 'Notification Type',
        sms: 'SMS',
        email: 'Email',
        phone: 'Phone Number',
        add: 'Add more',
        repeatType: 'Period',
        when: 'When?',
        noInfo: 'No Info',
        createReminder: 'Create Reminder',
        deleteConfirm: 'Are you sure you want to delete this reminder?',
        deleteSuccess: 'This reminder has been deleted successfully!',
      },
      serviceReminderForm: {
        title: 'Reminder',
        oneRequired: 'At least one required',
        notificationType: 'Notification Type',
        sms: 'SMS',
        email: 'Email',
        phone: 'Phone Number',
        period: 'Period',
        num: 'Amount',
        repeatType: 'Period',
        frequency: 'Time',
        eventType: 'Event Type',
        eventTypeTooltip: 'Select when this reminder should be executed',
      },
      serviceCreate: {
        title: 'Create a Service',
        description: 'You are starting the process to create a new service',
        cancel: 'Cancel',
        create: 'Create',
        name: 'Name',
        saveSuccess: 'A service has been created successfully!',
      },
      feeInfo: {
        titleCreate: 'New Fee',
        titleUpdate: 'Fee',
        description: 'Set the fee',
        name: 'Name',
        descriptionField: 'Description',
        calculationModel: 'Calculation Model',
        calculationModelDescription: 'Define how the fee should be calculated.',
        applyHint: '% of total Booking value (excl. fees & taxes)',
        percentage: 'Percentage',
        charge: 'Charge Type',
        chargeTooltip: 'Select whether this fee must be applied for each night separately or just once per booking',
        amount: 'Amount',
        amountPlaceholder: 'e.g. 100 {sign}',
        percentPlaceholder: 'e.g. 19%',
        currency: 'Currency',
        frequency: 'Frequency',
        frequencyTooltip: 'Frequency description',
        saveSuccess: 'This fee has been saved successfully!',
        sales: 'Set the sales tax / VAT of your fee',
      },
      taxInfo: {
        titleCreate: 'New Tax',
        titleUpdate: 'Tax',
        description: 'Set the tax',
        name: 'Name',
        descriptionField: 'Description',
        calculationModel: 'Calculation Model',
        calculationModelDescription: 'Define how the fee should be calculated.',
        applyHint: '% of total Booking value (excl. fees & taxes)',
        percentage: 'Percentage',
        charge: 'Charge Type',
        chargeTooltip: 'Select whether this fee must be applied for each night separately or just once per booking',
        amount: 'Amount',
        amountPlaceholder: 'e.g. 100 {sign}',
        percentPlaceholder: 'e.g. 19%',
        currency: 'Currency',
        frequency: 'Frequency',
        frequencyTooltip: 'Frequency description',
        saveSuccess: 'This tax has been saved successfully!',
        sales: 'Set the sales tax / VAT of your fee',
      },
      servicesTable: {
        title: 'Services',
        description: 'List of services',
        create: 'Create Service',
        name: 'Name',
        availability: 'Availability',
        notification: 'Notification',
        provider: 'Provider',
        allStay: 'All Stay',
        calendar: 'Calendar',
        reminders: 'Reminders',
        perGuest: '{num} per guest',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this service?',
        deleteSuccess: 'This service has been  deleted successfully!',
      },
      serviceProvidersTable: {
        title: 'Service Providers',
        description: 'List of service providers',
        create: 'Create Service Provider',
        name: 'Name',
        email: 'E-mail',
        phoneNumber: 'Phone Number',
        companyName: 'Company Name',
        contactPerson: 'Contact Person',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this service provider?',
        deleteSuccess: 'This service provider type has been  deleted successfully!',
      },
      serviceProviderForm: {
        title: 'Service Provider',
        name: 'Name',
        email: 'E-mail',
        phoneNumber: 'Phone Number',
        companyName: 'Company Name',
        companyAddress: 'Company Address',
        contactPerson: 'Contact Person',
        description: 'Description',
        notes: 'Notes',
      },
      salesChannelForm: {
        title: 'Sales Channel',
        name: 'Name',
        commission: 'Commission (%)',
      },
      seasonRateInfo: {
        title: 'Season name and date periods',
        description: 'Give your season a descriptive name, e.g. "High Season" or "Low Season" and define for which date period this season should apply to',
        seasonRates: 'Season Rates',
        seasonName: 'Season Name',
      },
      customerContactForm: {
        title: 'Customer Contact',
        firstName: 'First Name',
        lastName: 'Last Name',
        email: 'Email',
        primaryPhoneNumber: 'Primary Phone Number',
        additionalPhoneNumber: 'Additional Phone Number',
        bio: 'Bio',
        parlance: 'Language',
        isDefault: 'Is Default',
        saveSuccess: 'Customer contact has been saved successfully!',
      },
    },
    views: {
      services: {
        title: 'Services',
      },
      servicesUpdate: {
        title: 'Update Service',
      },
      fees: {
        title: 'Fees',
        description: 'Add fees to your property',
        create: 'Create a New Fee',
        name: 'Name',
        fee: 'Fee',
        frequency: 'Frequency',
        chargeType: 'Charge Type',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this fee?',
        deleteSuccess: 'This fee has been deleted successfully!',
      },
      taxes: {
        title: 'Taxes',
        description: 'Set the taxes of your rental',
        create: 'Create a New Tax',
        name: 'Name',
        tax: 'Tax',
        frequency: 'Frequency',
        chargeType: 'Charge Type',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this tax?',
        deleteSuccess: 'This tax has been deleted successfully!',
      },
      feesCreate: {
        title: 'Create Fee',
      },
      feesUpdate: {
        title: 'Update Fee',
      },
      taxesCreate: {
        title: 'Create Tax',
      },
      taxesUpdate: {
        title: 'Update Tax',
      },
      seasonRates: {
        title: 'Season Rates',
        description: 'Set your season rates',
        create: 'Create a new season rate',
        name: 'Name',
        priceNightly: 'Price Per Night',
        minStay: 'Min. Stay Days',
        status: 'Status',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this rate?',
        deleteSuccess: 'This rate has been  deleted successfully!',
        ratesWarn: 'There are no global rates. Do you want to be redirected to the Rates page?',
      },
      seasonRatesOverview: {
        title: 'Season Rate',
        successUpdate: 'Season Rate has been updated successfully!',
      },
      salesChannels: {
        title: 'Sales Channels',
        name: 'Name',
        commission: 'Commission',
        create: 'Create Sales Channel',
        action: 'Action',
        noInfo: 'No Info',
        description: 'Set your sales channels',
        deleteConfirm: 'Are you sure you want to delete this sales channel?',
        deleteSuccess: 'This sales channel has been  deleted successfully!',
      },
      salesChannelsModal: {
        title: 'Sales Channels',
        name: 'Name',
        commission: 'Commission',
        cancel: 'Cancel',
        save: 'Save',
      },
      customerContacts: {
        title: 'Customer Contacts',
        description: 'Set customer contacts',
        create: 'Create Contact',
        name: 'Name',
        email: 'Email',
        phoneNumber: 'Phone Number',
        bio: 'Bio',
        default: 'Default',
        isDefault: 'Is Default',
        action: 'Action',
        noInfo: 'No Info',
        deleteConfirm: 'Are you sure you want to delete this customer contact?',
        deleteSuccess: 'This customer contact has been  deleted successfully!',
      },
    },
    dicts: {
      timing: {
        time: 'Exact Time',
        stay: 'All Stay',
      },
      calculations: {
        fixed: 'Flat fee',
        percentage: 'Percentage',
      },
      periods: {
        minutes: 'Minutes',
        hours: 'Hours',
        days: 'Days',
        weeks: 'Weeks',
        months: 'Months',
      },
      notificationTimes: {
        beforeCheckOut: 'Before Check Out',
        afterCheckOut: 'After Check Out',
        beforeCheckIn: 'Before Check In',
        afterCheckIn: 'After Check In',
        beforeService: 'Before Service',
      },
      chargeTypes: {
        singleCharge: 'Single Charge',
        perNight: 'Per Night',
        perPerson: 'Per Person',
      },
      frequencies: {
        perStay: 'Per Stay',
        perNight: 'Per Night',
      },
      seasonRateStatuses: {
        completed: 'Completed',
        notCompleted: 'Not completed',
      },
    },
  },
};
