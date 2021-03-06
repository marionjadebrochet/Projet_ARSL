'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/3.0.0-beta.x/guides/controllers.html#core-controllers)
 * to customize this controller
 */

module.exports = {
  create: async ctx => {
      const {
          libelle,
          jourshoraires,
          publicConcerne,
          Animaux,
          tel,
          association,
          lieu
      } = ctx.request.body;

      try {
          const centre = await strapi.services.centre.create({
            libelle,
            jourshoraires,
            association,
            publicConcerne,
            Animaux,
            tel,
            lieu
          });

          return centre;
      } catch (error) {
          alert('erreur depuis apiControlleurCentre');
      }
  },

    update: async ctx => {
        const {
            service,
            centreInfos
        } = ctx.request.body;

        try {
            const centre = await strapi.query('centre').update(
            {id: ctx.params.id},
            {
                services: [centreInfos.services.id, service.id]
            });

            return centre;
        } catch (error) {
            //silent
        }
    },

    delete: async ctx => {
      try {
          await strapi.query('centre').delete(
          {id: ctx.params.id});
      } catch (error) {
          //silent
      }
    }
};
