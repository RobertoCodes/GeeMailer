# Phase 2: Flux Architecture and Email CRUD (2 days)

## Rails
### Models

### Controllers
* Api::Emails Controller (create, destroy, index, show, update?)

### Views

## Flux
### Views (React Components)
* EmailsIndex(Dashboard - Inbox/Outbox)
    -EmailForm - write and submit new emails. 
    -EmailsIndexItem
		* EmailDetailedView - Which has its own EmailIndexItems (shows entire message chain)
  			-EmailReplyForm - write and submit replys inside EmailIndexItems message chain

### Stores
* Categories Store (May be broken into Sent and Received?)

### Actions
* ApiActions.receiveAllContacts
* ApiActions.receiveEmailChain
* ApiActions.receiveSingleEmail
* ApiActions.deleteEmail

### ApiUtil
* ApiUtil.fetchAllEmails
* ApiUtil.fetchEmailChain
* ApiUtil.fetchSingleEmail
* ApiUtil.createEmail
* ApiUtil.editEmail
* ApiUtil.destroyEmail

## Gems/Libraries
* Flux Dispatcher
