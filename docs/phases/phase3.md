# Phase 3:  Categories/stars and Contacts

## Rails
### Models
Contacts

### Controllers
Api:Contacts Controller (create, new, index, destroy)

### Views

contacts/index.json.jbuilder

## Flux
### Views (React Components)
* SearchIndex
* ContactsIndex

### Stores
Contacts

### Actions
Api.Actions.receiveAllContacts
Api.Actions.receiveOneContact
Api.Actions.deleteContact

### ApiUtil
ApiUtil.fetchAllContacts
ApiUtil.fetchAcontact
ApiUtil.destroyContact

## Gems/Libraries
FluxDispatcher