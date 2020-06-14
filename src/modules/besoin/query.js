// Imports
import { GraphQLString, GraphQLInt, GraphQLList } from 'graphql'

// App Imports
import { BesoinType, BesoinTypesType,DepartementTypesType, VilleTypesType  } from './types'
import { getAll, getBySlug, getByUser, getById, getRelated, getRelatedByCategorie, getRelatedByUserId, getTypes,getDepartementNomsTypes,getVilleNomsTypes } from './resolvers'

// Besoins All
export const besoins = {
  type: new GraphQLList(BesoinType),
  resolve: getAll
}

// Besoin By slug
export const besoin = {
  type: BesoinType,
  args: {
    slug: { type: GraphQLString }
  },
  resolve: getBySlug
}

// Besoin By ID
export const besoinById = {
  type: BesoinType,
  args: {
    besoinId: { type: GraphQLInt }
  },
  resolve: getById
}

// Besoins by user
export const besoinsByUser = {
  type: new GraphQLList(BesoinType),
  resolve: getByUser
}

// Besoins Related
export const besoinsRelated = {
  type: new GraphQLList(BesoinType),
  args: {
    besoinId: { type: GraphQLInt }
  },
  resolve: getRelated
}

// Besoins Related by categorie
export const besoinsRelatedByCategorie = {
  type: new GraphQLList(BesoinType),
  args: {
    categorieId: { type: GraphQLInt }
  },
  resolve: getRelatedByCategorie
}

// Besoins Related by UserId
export const besoinsRelatedByUserId = {
  type: new GraphQLList(BesoinType),
  args: {
    userId: { type: GraphQLInt }
  },
  resolve: getRelatedByUserId
}

// Besoin Types
export const besoinTypes = {
  type: new GraphQLList(BesoinTypesType),
  resolve: getTypes
}

// Departement Types
export const departementNomsTypes = {
  type: new GraphQLList(DepartementTypesType),
  resolve: getDepartementNomsTypes
}

// Ville Types
export const villeNomsTypes = {
  type: new GraphQLList(VilleTypesType),
  resolve: getVilleNomsTypes
}