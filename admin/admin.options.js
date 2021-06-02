const { default: AdminBro } = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const uploadFeature = require('@admin-bro/upload')
const config = require('config')

const Admin = require('./admin.resourceOptions')
const Merch = require('../models/Merch')
const MerchOptions = require('./merch.resourceOptions')
const Competition = require('../models/Competition')
const CompetitionOptions = require('./competition.resourceOptions')
const Report = require('../models/Report')
const ReportOptions = require('./report.resourceOptions')
const Worker = require('../models/Worker')
const WorkerOptions = require('./worker.resourceOptions')
const Athletes = require('../models/Athletes')
const AthletesOptions = require('./athletes.resourceOptions')
const Schedule = require('../models/Schedule')
const ScheduleOptions = require('./schedule.resourceOptions')
const TeamPhoto = require('../models/TeamPhoto')
const TeamPhotoOptions = require('./teamPhoto.resourceOptions')
const CampPhoto = require('../models/CampPhoto')
const CampPhotoOptions = require('./campPhoto.resourceOptions')
const Reviews = require('../models/Review')
const ReviewsOptions = require('./reviews.resourceOptions')
const { FAQCamp, FAQBeginners } = require('../models/FAQ')
const FAQOptions = require('./faq.resourceOptions')
const { ClubAwards, AthleteAwards } = require('../models/Awards')
const AwardsOptions = require('./awards.resourceOptions')
const { CardPrice, OneTimeVisitPrice } = require('../models/Price')
const PriceOptions = require('./price.resourceOptions')
const Article = require('../models/Article')
const ArticleOptions = require('./article.resourceOptions')

const region = config.get('AWSRegion')
const bucket = config.get('AWSBucket')
const secretAccessKey = config.get('AWSSecretAccessKey')
const accessKeyId = config.get('AWSAccessKeyID')

const features = [
  uploadFeature({
    provider: {
      aws: { region, bucket, secretAccessKey, accessKeyId, expires: 0 },
    },
    properties: {
      filename: 'uploadedFile.filename',
      file: 'uploadedFile',
      key: 'uploadedFile.path',
      bucket: 'uploadedFile.folder',
      size: 'uploadedFile.size',
      mimeType: 'mimeType',
    },
    validation: {
      mimeTypes: ['image/png', 'image/jpg', 'image/jpeg'],
    },
  }),
]

AdminBro.registerAdapter(AdminBroMongoose)

/** @type {import('admin-bro').AdminBroOptions} */
const options = {
  locale: {
    language: 'rus',
    translations: {
      actions: {
        new: 'Добавить',
        edit: 'Редактировать',
        show: 'Подробнее',
        delete: 'Удалить',
        list: 'Записи',
        search: 'Искать',
        addNewItem: 'Добавить',
      },
      labels: {
        Admin: 'Администраторы',
        Merch: 'Мерч',
        Competition: 'Виды соревнований',
        Report: 'Фотоотчет',
        Worker: 'Команда',
        Athletes: 'Известные атлеты',
        Schedule: 'Расписание занятий',
        TeamPhoto: 'Фото команды',
        CampPhoto: 'Фото с "лагеря"',
        Reviews: 'Отзывы',
        FAQCamp: 'Вопросы (Лагерь)',
        FAQBeginners: 'Вопросы (Новичкам)',
        ClubAwards: 'Награды клуба',
        AthleteAwards: 'Награды атлетов',
        CardPrice: 'Клубные карты',
        OneTimeVisitPrice: 'Разовые посещения',
        Articles: 'Блог',
      },
      buttons: {
        filter: 'Фильтр',
        save: 'Сохранить',
      },
      resources: {
        Merch: {
          properties: {
            name: 'Название',
            price: 'Цена',
            sizes: 'Доступные размеры',
            uploadedFile: 'Фото',
          },
        },
        Competition: {
          properties: {
            name: 'Название',
            text: 'Описание',
            complexity: 'Сложность',
            uploadedFile: 'Фото',
          },
        },
        Report: {
          properties: {
            uploadedFile: 'Фото',
          },
        },
        Worker: {
          properties: {
            uploadedFile: 'Фото',
            name: 'Имя',
            post: 'Должность',
            achievements: 'Достижения',
            addition: 'Дополнительные услуги',
            socials: 'Соцсети',
            'socials.vk': 'ВКонтакте',
            'socials.telegram': 'Telegram',
            'socials.instagram': 'Instagram',
            'socials.youtube': 'YouTube',
          },
        },
        Athletes: {
          properties: {
            uploadedFile: 'Фото',
            name: 'Имя',
            rank: 'Звание',
            achievements: 'Достижения',
          },
        },
        Schedule: {
          properties: {
            weekDay: 'День недели',
            schedule: 'Расписание',
            'schedule.time': 'Время',
            'schedule.name': 'Название',
            'schedule.description': 'Описание',
          },
        },
        TeamPhoto: {
          properties: {
            uploadedFile: 'Фото',
          },
        },
        CampPhoto: {
          properties: {
            uploadedFile: 'Фото',
          },
        },
        Reviews: {
          properties: {
            uploadedFile: 'Фото',
            name: 'Имя',
            review: 'Отзыв',
            rating: 'Оценка',
          },
        },
        FAQCamp: {
          properties: {
            question: 'Вопрос',
            answer: 'Ответ',
          },
        },
        FAQBeginners: {
          properties: {
            question: 'Вопрос',
            answer: 'Ответ',
          },
        },
        ClubAwards: {
          properties: {
            uploadedFile: 'Фото',
            title: 'Заголовок',
            text: 'Текст',
          },
        },
        AthleteAwards: {
          properties: {
            uploadedFile: 'Фото',
            title: 'Заголовок',
            text: 'Текст',
          },
        },
        CardPrice: {
          properties: {
            period: 'Период',
            cost: 'Стоимость',
            info: 'Доп. информация',
            isHit: 'Хит',
          },
        },
        OneTimeVisitPrice: {
          properties: {
            period: 'Период',
            cost: 'Стоимость',
            info: 'Доп. информация',
            isHit: 'Хит',
          },
        },
        Articles: {
          properties: {
            uploadedFile: 'Фото',
            category: 'Категория',
            'category.cat1': 'Питание',
            'category.cat2': 'Соревнования',
            'category.cat3': 'Лагерь',
            'category.cat4': 'Растяжка',
            'category.cat5': 'Тренировки',
            title: 'Заголовок',
            text: 'Текст',
            publishedAt: 'Дата',
          },
        },
      },
    },
  },
  resources: [
    Admin,
    {
      resource: Merch,
      options: MerchOptions,
      features,
    },
    {
      resource: Competition,
      options: CompetitionOptions,
      features,
    },
    {
      resource: Report,
      options: ReportOptions,
      features,
    },
    {
      resource: Worker,
      options: WorkerOptions,
      features,
    },
    {
      resource: Athletes,
      options: AthletesOptions,
      features,
    },
    {
      resource: Schedule,
      options: ScheduleOptions,
    },
    {
      resource: TeamPhoto,
      options: TeamPhotoOptions,
      features,
    },
    {
      resource: CampPhoto,
      options: CampPhotoOptions,
      features,
    },
    {
      resource: Reviews,
      options: ReviewsOptions,
      features,
    },
    {
      resource: FAQCamp,
      options: FAQOptions,
    },
    {
      resource: FAQBeginners,
      options: FAQOptions,
    },
    {
      resource: ClubAwards,
      options: AwardsOptions,
      features,
    },
    {
      resource: AthleteAwards,
      options: AwardsOptions,
      features,
    },
    {
      resource: CardPrice,
      options: PriceOptions,
    },
    {
      resource: OneTimeVisitPrice,
      options: PriceOptions,
    },
    {
      resource: Article,
      options: ArticleOptions,
      features,
    },
  ],
  branding: {
    companyName: 'Crossfit Redyar',
    logo: '',
    softwareBrothers: false,
  },
}

module.exports = options
